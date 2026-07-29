--- 
title: security_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - security_configurations
  - glue
  - aws
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage aws resources using SQL
custom_edit_url: null
image: /img/stackql-aws-provider-featured-image.png
---

import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';
import CodeBlock from '@theme/CodeBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Creates, updates, deletes, gets or lists a <code>security_configurations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="security_configurations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.glue.security_configurations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_security_configuration"
    values={[
        { label: 'get_security_configuration', value: 'get_security_configuration' }
    ]}
>
<TabItem value="get_security_configuration">

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><CopyableCode code="created_time_stamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which this security configuration was created.</td>
</tr>
<tr>
    <td><CopyableCode code="encryption_configuration" /></td>
    <td><code>object</code></td>
    <td>The encryption configuration associated with this security configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the security configuration. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\t&#93;*&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
</Tabs>

## Methods

The following methods are available for this resource:

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Accessible by</th>
    <th>Required Params</th>
    <th>Optional Params</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><a href="#get_security_configuration"><CopyableCode code="get_security_configuration" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves a specified security configuration.</td>
</tr>
<tr>
    <td><a href="#create_security_configuration"><CopyableCode code="create_security_configuration" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-EncryptionConfiguration"><code>EncryptionConfiguration</code></a></td>
    <td></td>
    <td>Creates a new security configuration. A security configuration is a set of security properties that can be used by Glue. You can use a security configuration to encrypt data at rest. For information about using security configurations in Glue, see Encrypting Data Written by Crawlers, Jobs, and Development Endpoints.</td>
</tr>
<tr>
    <td><a href="#delete_security_configuration"><CopyableCode code="delete_security_configuration" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a specified security configuration.</td>
</tr>
<tr>
    <td><a href="#get_security_configurations"><CopyableCode code="get_security_configurations" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves a list of all security configurations.</td>
</tr>
</tbody>
</table>

## Parameters

Parameters can be passed in the `WHERE` clause of a query. Check the [Methods](#methods) section to see which parameters are required or optional for each operation.

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_security_configuration"
    values={[
        { label: 'get_security_configuration', value: 'get_security_configuration' }
    ]}
>
<TabItem value="get_security_configuration">

Retrieves a specified security configuration.

```sql
SELECT
created_time_stamp,
encryption_configuration,
name
FROM aws.glue.security_configurations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_security_configuration"
    values={[
        { label: 'create_security_configuration', value: 'create_security_configuration' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_security_configuration">

Creates a new security configuration. A security configuration is a set of security properties that can be used by Glue. You can use a security configuration to encrypt data at rest. For information about using security configurations in Glue, see Encrypting Data Written by Crawlers, Jobs, and Development Endpoints.

```sql
INSERT INTO aws.glue.security_configurations (
Name,
EncryptionConfiguration,
region
)
SELECT 
'{{ Name }}',
'{{ EncryptionConfiguration }}' /* required */,
'{{ region }}'
RETURNING
created_timestamp,
name
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: security_configurations
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the security_configurations resource.
    - name: Name
      value: "{{ Name }}"
      description: |
        The name for the new security configuration.
    - name: EncryptionConfiguration
      description: |
        The encryption configuration for the new security configuration.
      value:
        S3Encryption:
          - S3EncryptionMode: "{{ S3EncryptionMode }}"
            KmsKeyArn: "{{ KmsKeyArn }}"
        CloudWatchEncryption:
          CloudWatchEncryptionMode: "{{ CloudWatchEncryptionMode }}"
          KmsKeyArn: "{{ KmsKeyArn }}"
        JobBookmarksEncryption:
          JobBookmarksEncryptionMode: "{{ JobBookmarksEncryptionMode }}"
          KmsKeyArn: "{{ KmsKeyArn }}"
        DataQualityEncryption:
          DataQualityEncryptionMode: "{{ DataQualityEncryptionMode }}"
          KmsKeyArn: "{{ KmsKeyArn }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_security_configuration"
    values={[
        { label: 'delete_security_configuration', value: 'delete_security_configuration' }
    ]}
>
<TabItem value="delete_security_configuration">

Deletes a specified security configuration.

```sql
DELETE FROM aws.glue.security_configurations
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="get_security_configurations"
    values={[
        { label: 'get_security_configurations', value: 'get_security_configurations' }
    ]}
>
<TabItem value="get_security_configurations">

Retrieves a list of all security configurations.

```sql
EXEC aws.glue.security_configurations.get_security_configurations 
@region='{{ region }}' --required 
@@json=
'{
"MaxResults": {{ MaxResults }}, 
"NextToken": "{{ NextToken }}"
}'
;
```
</TabItem>
</Tabs>
