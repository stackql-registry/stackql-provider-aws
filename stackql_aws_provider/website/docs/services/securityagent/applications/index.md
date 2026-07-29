--- 
title: applications
hide_title: false
hide_table_of_contents: false
keywords:
  - applications
  - securityagent
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

Creates, updates, deletes, gets or lists an <code>applications</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="applications" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.securityagent.applications" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_application"
    values={[
        { label: 'get_application', value: 'get_application' },
        { label: 'list_applications', value: 'list_applications' }
    ]}
>
<TabItem value="get_application">

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
    <td><CopyableCode code="application_id" /></td>
    <td><code>string</code></td>
    <td>Application identifier.</td>
</tr>
<tr>
    <td><CopyableCode code="application_name" /></td>
    <td><code>string</code></td>
    <td>The name of the application.</td>
</tr>
<tr>
    <td><CopyableCode code="default_kms_key_id" /></td>
    <td><code>string</code></td>
    <td>Identifier of a KMS key. Can be a key ID, key ARN, alias name, or alias ARN.</td>
</tr>
<tr>
    <td><CopyableCode code="domain" /></td>
    <td><code>string</code></td>
    <td>The domain associated with the application.</td>
</tr>
<tr>
    <td><CopyableCode code="idc_configuration" /></td>
    <td><code>object</code></td>
    <td>The IAM Identity Center configuration for the application.</td>
</tr>
<tr>
    <td><CopyableCode code="role_arn" /></td>
    <td><code>string</code></td>
    <td>ARN of the IAM role that the application uses to access AWS resources on your behalf.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_applications">

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
    <td><CopyableCode code="application_id" /></td>
    <td><code>string</code></td>
    <td>Application identifier.</td>
</tr>
<tr>
    <td><CopyableCode code="application_name" /></td>
    <td><code>string</code></td>
    <td>The name of the application.</td>
</tr>
<tr>
    <td><CopyableCode code="default_kms_key_id" /></td>
    <td><code>string</code></td>
    <td>Identifier of a KMS key. Can be a key ID, key ARN, alias name, or alias ARN.</td>
</tr>
<tr>
    <td><CopyableCode code="domain" /></td>
    <td><code>string</code></td>
    <td>The domain associated with the application.</td>
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
    <td><a href="#get_application"><CopyableCode code="get_application" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about an application.</td>
</tr>
<tr>
    <td><a href="#list_applications"><CopyableCode code="list_applications" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a paginated list of application summaries in your account.</td>
</tr>
<tr>
    <td><a href="#create_application"><CopyableCode code="create_application" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates a new application. An application is the top-level organizational unit that supports IAM Identity Center integration.</td>
</tr>
<tr>
    <td><a href="#update_application"><CopyableCode code="update_application" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-applicationId"><code>applicationId</code></a></td>
    <td></td>
    <td>Updates the configuration of an existing application, including the IAM role and default KMS key.</td>
</tr>
<tr>
    <td><a href="#delete_application"><CopyableCode code="delete_application" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an application and its associated configuration, including IAM Identity Center settings.</td>
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
    defaultValue="get_application"
    values={[
        { label: 'get_application', value: 'get_application' },
        { label: 'list_applications', value: 'list_applications' }
    ]}
>
<TabItem value="get_application">

Retrieves information about an application.

```sql
SELECT
application_id,
application_name,
default_kms_key_id,
domain,
idc_configuration,
role_arn
FROM aws.securityagent.applications
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_applications">

Returns a paginated list of application summaries in your account.

```sql
SELECT
application_id,
application_name,
default_kms_key_id,
domain
FROM aws.securityagent.applications
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_application"
    values={[
        { label: 'create_application', value: 'create_application' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_application">

Creates a new application. An application is the top-level organizational unit that supports IAM Identity Center integration.

```sql
INSERT INTO aws.securityagent.applications (
idcInstanceArn,
roleArn,
defaultKmsKeyId,
tags,
region
)
SELECT 
'{{ idcInstanceArn }}',
'{{ roleArn }}',
'{{ defaultKmsKeyId }}',
'{{ tags }}',
'{{ region }}'
RETURNING
application_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: applications
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the applications resource.
    - name: idcInstanceArn
      value: "{{ idcInstanceArn }}"
      description: |
        ARN of the IAM Identity Center instance used for user authentication.
    - name: roleArn
      value: "{{ roleArn }}"
      description: |
        ARN of the IAM role that the application uses to access AWS resources on your behalf.
    - name: defaultKmsKeyId
      value: "{{ defaultKmsKeyId }}"
      description: |
        Identifier of a KMS key. Can be a key ID, key ARN, alias name, or alias ARN.
    - name: tags
      value: "{{ tags }}"
      description: |
        Map of tags for a resource.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_application"
    values={[
        { label: 'update_application', value: 'update_application' }
    ]}
>
<TabItem value="update_application">

Updates the configuration of an existing application, including the IAM role and default KMS key.

```sql
UPDATE aws.securityagent.applications
SET 
applicationId = '{{ applicationId }}',
roleArn = '{{ roleArn }}',
defaultKmsKeyId = '{{ defaultKmsKeyId }}'
WHERE 
region = '{{ region }}' --required
AND applicationId = '{{ applicationId }}' --required
RETURNING
application_id;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_application"
    values={[
        { label: 'delete_application', value: 'delete_application' }
    ]}
>
<TabItem value="delete_application">

Deletes an application and its associated configuration, including IAM Identity Center settings.

```sql
DELETE FROM aws.securityagent.applications
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
