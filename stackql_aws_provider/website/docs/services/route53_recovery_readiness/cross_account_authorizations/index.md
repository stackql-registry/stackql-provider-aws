--- 
title: cross_account_authorizations
hide_title: false
hide_table_of_contents: false
keywords:
  - cross_account_authorizations
  - route53_recovery_readiness
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

Creates, updates, deletes, gets or lists a <code>cross_account_authorizations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="cross_account_authorizations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.route53_recovery_readiness.cross_account_authorizations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_cross_account_authorizations"
    values={[
        { label: 'list_cross_account_authorizations', value: 'list_cross_account_authorizations' }
    ]}
>
<TabItem value="list_cross_account_authorizations">

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
    <td><CopyableCode code="cross_account_authorization" /></td>
    <td><code>string</code></td>
    <td>A list of cross-account authorizations.</td>
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
    <td><a href="#list_cross_account_authorizations"><CopyableCode code="list_cross_account_authorizations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Lists the cross-account readiness authorizations that are in place for an account.</td>
</tr>
<tr>
    <td><a href="#create_cross_account_authorization"><CopyableCode code="create_cross_account_authorization" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-CrossAccountAuthorization"><code>CrossAccountAuthorization</code></a></td>
    <td></td>
    <td>Creates a cross-account readiness authorization. This lets you authorize another account to work with Route 53 Application Recovery Controller, for example, to check the readiness status of resources in a separate account.</td>
</tr>
<tr>
    <td><a href="#delete_cross_account_authorization"><CopyableCode code="delete_cross_account_authorization" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-cross_account_authorization"><code>cross_account_authorization</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes cross account readiness authorization.</td>
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
<tr id="parameter-cross_account_authorization">
    <td><CopyableCode code="cross_account_authorization" /></td>
    <td><code>string</code></td>
    <td>The cross-account authorization.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The number of objects that you want to return with this call.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token that identifies which batch of results you want to see.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_cross_account_authorizations"
    values={[
        { label: 'list_cross_account_authorizations', value: 'list_cross_account_authorizations' }
    ]}
>
<TabItem value="list_cross_account_authorizations">

Lists the cross-account readiness authorizations that are in place for an account.

```sql
SELECT
cross_account_authorization
FROM aws.route53_recovery_readiness.cross_account_authorizations
WHERE region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_cross_account_authorization"
    values={[
        { label: 'create_cross_account_authorization', value: 'create_cross_account_authorization' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_cross_account_authorization">

Creates a cross-account readiness authorization. This lets you authorize another account to work with Route 53 Application Recovery Controller, for example, to check the readiness status of resources in a separate account.

```sql
INSERT INTO aws.route53_recovery_readiness.cross_account_authorizations (
CrossAccountAuthorization,
region
)
SELECT 
'{{ CrossAccountAuthorization }}' /* required */,
'{{ region }}'
RETURNING
CrossAccountAuthorization
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: cross_account_authorizations
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the cross_account_authorizations resource.
    - name: CrossAccountAuthorization
      value: "{{ CrossAccountAuthorization }}"
      description: |
        CrossAccountAuthorization
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_cross_account_authorization"
    values={[
        { label: 'delete_cross_account_authorization', value: 'delete_cross_account_authorization' }
    ]}
>
<TabItem value="delete_cross_account_authorization">

Deletes cross account readiness authorization.

```sql
DELETE FROM aws.route53_recovery_readiness.cross_account_authorizations
WHERE cross_account_authorization = '{{ cross_account_authorization }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
