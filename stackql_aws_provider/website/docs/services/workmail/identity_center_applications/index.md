--- 
title: identity_center_applications
hide_title: false
hide_table_of_contents: false
keywords:
  - identity_center_applications
  - workmail
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

Creates, updates, deletes, gets or lists an <code>identity_center_applications</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="identity_center_applications" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.workmail.identity_center_applications" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#create_identity_center_application"><CopyableCode code="create_identity_center_application" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Name"><code>Name</code></a>, <a href="#parameter-InstanceArn"><code>InstanceArn</code></a></td>
    <td></td>
    <td>Creates the WorkMail application in IAM Identity Center that can be used later in the WorkMail - IdC integration. For more information, see PutIdentityProviderConfiguration. This action does not affect the authentication settings for any WorkMail organizations.</td>
</tr>
<tr>
    <td><a href="#delete_identity_center_application"><CopyableCode code="delete_identity_center_application" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the IAM Identity Center application from WorkMail. This action does not affect the authentication settings for any WorkMail organizations.</td>
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

## `INSERT` examples

<Tabs
    defaultValue="create_identity_center_application"
    values={[
        { label: 'create_identity_center_application', value: 'create_identity_center_application' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_identity_center_application">

Creates the WorkMail application in IAM Identity Center that can be used later in the WorkMail - IdC integration. For more information, see PutIdentityProviderConfiguration. This action does not affect the authentication settings for any WorkMail organizations.

```sql
INSERT INTO aws.workmail.identity_center_applications (
Name,
InstanceArn,
ClientToken,
region
)
SELECT 
'{{ Name }}' /* required */,
'{{ InstanceArn }}' /* required */,
'{{ ClientToken }}',
'{{ region }}'
RETURNING
ApplicationArn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: identity_center_applications
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the identity_center_applications resource.
    - name: Name
      value: "{{ Name }}"
      description: |
        The name of the IAM Identity Center application.
    - name: InstanceArn
      value: "{{ InstanceArn }}"
      description: |
        The Amazon Resource Name (ARN) of the instance.
    - name: ClientToken
      value: "{{ ClientToken }}"
      description: |
        The idempotency token associated with the request.
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_identity_center_application"
    values={[
        { label: 'delete_identity_center_application', value: 'delete_identity_center_application' }
    ]}
>
<TabItem value="delete_identity_center_application">

Deletes the IAM Identity Center application from WorkMail. This action does not affect the authentication settings for any WorkMail organizations.

```sql
DELETE FROM aws.workmail.identity_center_applications
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
