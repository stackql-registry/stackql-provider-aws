--- 
title: entitlements
hide_title: false
hide_table_of_contents: false
keywords:
  - entitlements
  - account_access
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

Creates, updates, deletes, gets or lists an <code>entitlements</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="entitlements" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.account_access.entitlements" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_entitlement"
    values={[
        { label: 'get_entitlement', value: 'get_entitlement' },
        { label: 'list_entitlements', value: 'list_entitlements' }
    ]}
>
<TabItem value="get_entitlement">

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
    <td><CopyableCode code="application_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the application that the entitlement belongs to. (pattern: &lt;code&gt;arn:&#91;a-z0-9-&#93;+:account-access:&#91;a-z0-9&#93;+(-&#91;a-z0-9&#93;+)*:&#91;0-9&#93;&#123;12&#125;:application/&#91;a-zA-Z0-9-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the entitlement was created.</td>
</tr>
<tr>
    <td><CopyableCode code="entitlement" /></td>
    <td><code>object</code></td>
    <td>The entitlement details, including the principal, IAM role, and target account.</td>
</tr>
<tr>
    <td><CopyableCode code="entitlement_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the entitlement.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_entitlements">

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
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the entitlement was created.</td>
</tr>
<tr>
    <td><CopyableCode code="entitlement" /></td>
    <td><code>object</code></td>
    <td>The summary information for the entitlement.</td>
</tr>
<tr>
    <td><CopyableCode code="entitlement_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the entitlement.</td>
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
    <td><a href="#get_entitlement"><CopyableCode code="get_entitlement" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-applicationArn"><code>applicationArn</code></a>, <a href="#parameter-entitlement_id"><code>entitlement_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves details about a specific entitlement for an account access manager application, including the principal, IAM role, and target account.</td>
</tr>
<tr>
    <td><a href="#list_entitlements"><CopyableCode code="list_entitlements" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the entitlements for a specified account access manager application. You can filter results by principal, IAM role, or account. Use pagination to ensure that the operation returns quickly and successfully.</td>
</tr>
<tr>
    <td><a href="#create_entitlement"><CopyableCode code="create_entitlement" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-applicationArn"><code>applicationArn</code></a>, <a href="#parameter-entitlement"><code>entitlement</code></a></td>
    <td></td>
    <td>Creates an entitlement (assignment) in account access manager. An entitlement (assignment) grants a principal (IAM Identity Center user or group) permission to assume a specified IAM role in an Amazon Web Services account. This operation is idempotent.</td>
</tr>
<tr>
    <td><a href="#delete_entitlement"><CopyableCode code="delete_entitlement" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-applicationArn"><code>applicationArn</code></a>, <a href="#parameter-entitlement_id"><code>entitlement_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an entitlement from an account access manager application. This operation is idempotent; deleting an entitlement that has already been deleted does not return an error.</td>
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
<tr id="parameter-applicationArn">
    <td><CopyableCode code="applicationArn" /></td>
    <td><code>string</code></td>
    <td>Specifies the ARN of the application that the entitlement belongs to.</td>
</tr>
<tr id="parameter-entitlement_id">
    <td><CopyableCode code="entitlement_id" /></td>
    <td><code>string</code></td>
    <td>Specifies the unique identifier of the entitlement to delete.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_entitlement"
    values={[
        { label: 'get_entitlement', value: 'get_entitlement' },
        { label: 'list_entitlements', value: 'list_entitlements' }
    ]}
>
<TabItem value="get_entitlement">

Retrieves details about a specific entitlement for an account access manager application, including the principal, IAM role, and target account.

```sql
SELECT
application_arn,
created_at,
entitlement,
entitlement_id
FROM aws.account_access.entitlements
WHERE applicationArn = '{{ applicationArn }}' -- required
AND entitlement_id = '{{ entitlement_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_entitlements">

Lists the entitlements for a specified account access manager application. You can filter results by principal, IAM role, or account. Use pagination to ensure that the operation returns quickly and successfully.

```sql
SELECT
created_at,
entitlement,
entitlement_id
FROM aws.account_access.entitlements
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_entitlement"
    values={[
        { label: 'create_entitlement', value: 'create_entitlement' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_entitlement">

Creates an entitlement (assignment) in account access manager. An entitlement (assignment) grants a principal (IAM Identity Center user or group) permission to assume a specified IAM role in an Amazon Web Services account. This operation is idempotent.

```sql
INSERT INTO aws.account_access.entitlements (
applicationArn,
entitlement,
region
)
SELECT 
'{{ applicationArn }}' /* required */,
'{{ entitlement }}' /* required */,
'{{ region }}'
RETURNING
entitlement_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: entitlements
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the entitlements resource.
    - name: applicationArn
      value: "{{ applicationArn }}"
    - name: entitlement
      description: |
        Specifies the entitlement configuration for an account access manager application, defining which principal can assume which IAM role.
      value:
        principalRole:
          principal:
            identityCenter:
              userId: "{{ userId }}"
              groupId: "{{ groupId }}"
          roleArn: "{{ roleArn }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_entitlement"
    values={[
        { label: 'delete_entitlement', value: 'delete_entitlement' }
    ]}
>
<TabItem value="delete_entitlement">

Deletes an entitlement from an account access manager application. This operation is idempotent; deleting an entitlement that has already been deleted does not return an error.

```sql
DELETE FROM aws.account_access.entitlements
WHERE applicationArn = '{{ applicationArn }}' --required
AND entitlement_id = '{{ entitlement_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
