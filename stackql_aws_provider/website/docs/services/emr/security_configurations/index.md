--- 
title: security_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - security_configurations
  - emr
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.emr.security_configurations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_security_configuration"
    values={[
        { label: 'describe_security_configuration', value: 'describe_security_configuration' }
    ]}
>
<TabItem value="describe_security_configuration">

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
    <td><CopyableCode code="creation_date_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the security configuration was created</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the security configuration. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="security_configuration" /></td>
    <td><code>string</code></td>
    <td>The security configuration details in JSON format.</td>
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
    <td><a href="#describe_security_configuration"><CopyableCode code="describe_security_configuration" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Provides the details of a security configuration by returning the configuration JSON.</td>
</tr>
<tr>
    <td><a href="#create_security_configuration"><CopyableCode code="create_security_configuration" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-SecurityConfiguration"><code>SecurityConfiguration</code></a></td>
    <td></td>
    <td>Creates a security configuration, which is stored in the service and can be specified when a cluster is created.</td>
</tr>
<tr>
    <td><a href="#delete_security_configuration"><CopyableCode code="delete_security_configuration" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a security configuration.</td>
</tr>
<tr>
    <td><a href="#list_security_configurations"><CopyableCode code="list_security_configurations" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists all the security configurations visible to this account, providing their creation dates and times, and their names. This call returns a maximum of 50 clusters per call, but returns a marker to track the paging of the cluster list across multiple ListSecurityConfigurations calls.</td>
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
    defaultValue="describe_security_configuration"
    values={[
        { label: 'describe_security_configuration', value: 'describe_security_configuration' }
    ]}
>
<TabItem value="describe_security_configuration">

Provides the details of a security configuration by returning the configuration JSON.

```sql
SELECT
creation_date_time,
name,
security_configuration
FROM aws.emr.security_configurations
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

Creates a security configuration, which is stored in the service and can be specified when a cluster is created.

```sql
INSERT INTO aws.emr.security_configurations (
Name,
SecurityConfiguration,
region
)
SELECT 
'{{ Name }}',
'{{ SecurityConfiguration }}' /* required */,
'{{ region }}'
RETURNING
creation_date_time,
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
        The name of the security configuration.
    - name: SecurityConfiguration
      value: "{{ SecurityConfiguration }}"
      description: |
        The security configuration details in JSON format. For JSON parameters and examples, see Use Security Configurations to Set Up Cluster Security in the Amazon EMR Management Guide.
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

Deletes a security configuration.

```sql
DELETE FROM aws.emr.security_configurations
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="list_security_configurations"
    values={[
        { label: 'list_security_configurations', value: 'list_security_configurations' }
    ]}
>
<TabItem value="list_security_configurations">

Lists all the security configurations visible to this account, providing their creation dates and times, and their names. This call returns a maximum of 50 clusters per call, but returns a marker to track the paging of the cluster list across multiple ListSecurityConfigurations calls.

```sql
EXEC aws.emr.security_configurations.list_security_configurations 
@region='{{ region }}' --required 
@@json=
'{
"Marker": "{{ Marker }}"
}'
;
```
</TabItem>
</Tabs>
