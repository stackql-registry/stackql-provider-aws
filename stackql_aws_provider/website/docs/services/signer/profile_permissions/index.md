--- 
title: profile_permissions
hide_title: false
hide_table_of_contents: false
keywords:
  - profile_permissions
  - signer
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

Creates, updates, deletes, gets or lists a <code>profile_permissions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="profile_permissions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.signer.profile_permissions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_profile_permissions"
    values={[
        { label: 'list_profile_permissions', value: 'list_profile_permissions' }
    ]}
>
<TabItem value="list_profile_permissions">

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
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>String for specifying the next set of paginated results.</td>
</tr>
<tr>
    <td><CopyableCode code="permissions" /></td>
    <td><code>array</code></td>
    <td>List of permissions associated with the Signing Profile.</td>
</tr>
<tr>
    <td><CopyableCode code="policy_size_bytes" /></td>
    <td><code>integer</code></td>
    <td>Total size of the policy associated with the Signing Profile in bytes.</td>
</tr>
<tr>
    <td><CopyableCode code="revision_id" /></td>
    <td><code>string</code></td>
    <td>The identifier for the current revision of profile permissions.</td>
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
    <td><a href="#list_profile_permissions"><CopyableCode code="list_profile_permissions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-profile_name"><code>profile_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Lists the cross-account permissions associated with a signing profile.</td>
</tr>
<tr>
    <td><a href="#add_profile_permission"><CopyableCode code="add_profile_permission" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-profile_name"><code>profile_name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-action"><code>action</code></a>, <a href="#parameter-principal"><code>principal</code></a>, <a href="#parameter-statementId"><code>statementId</code></a></td>
    <td></td>
    <td>Adds cross-account permissions to a signing profile.</td>
</tr>
<tr>
    <td><a href="#remove_profile_permission"><CopyableCode code="remove_profile_permission" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-profile_name"><code>profile_name</code></a>, <a href="#parameter-revisionId"><code>revisionId</code></a>, <a href="#parameter-statement_id"><code>statement_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Removes cross-account permissions from a signing profile.</td>
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
<tr id="parameter-profile_name">
    <td><CopyableCode code="profile_name" /></td>
    <td><code>string</code></td>
    <td>A human-readable name for the signing profile with permissions to be removed.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-revisionId">
    <td><CopyableCode code="revisionId" /></td>
    <td><code>string</code></td>
    <td>An identifier for the current revision of the signing profile permissions.</td>
</tr>
<tr id="parameter-statement_id">
    <td><CopyableCode code="statement_id" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for the cross-account permissions statement.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>String for specifying the next set of paginated results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_profile_permissions"
    values={[
        { label: 'list_profile_permissions', value: 'list_profile_permissions' }
    ]}
>
<TabItem value="list_profile_permissions">

Lists the cross-account permissions associated with a signing profile.

```sql
SELECT
next_token,
permissions,
policy_size_bytes,
revision_id
FROM aws.signer.profile_permissions
WHERE profile_name = '{{ profile_name }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="add_profile_permission"
    values={[
        { label: 'add_profile_permission', value: 'add_profile_permission' },
        { label: 'remove_profile_permission', value: 'remove_profile_permission' }
    ]}
>
<TabItem value="add_profile_permission">

Adds cross-account permissions to a signing profile.

```sql
UPDATE aws.signer.profile_permissions
SET 
profileVersion = '{{ profileVersion }}',
action = '{{ action }}',
principal = '{{ principal }}',
revisionId = '{{ revisionId }}',
statementId = '{{ statementId }}'
WHERE 
profile_name = '{{ profile_name }}' --required
AND region = '{{ region }}' --required
AND action = '{{ action }}' --required
AND principal = '{{ principal }}' --required
AND statementId = '{{ statementId }}' --required
RETURNING
revision_id;
```
</TabItem>
<TabItem value="remove_profile_permission">

Removes cross-account permissions from a signing profile.

```sql
UPDATE aws.signer.profile_permissions
SET 
-- No updatable properties
WHERE 
profile_name = '{{ profile_name }}' --required
AND revisionId = '{{ revisionId }}' --required
AND statement_id = '{{ statement_id }}' --required
AND region = '{{ region }}' --required
RETURNING
revision_id;
```
</TabItem>
</Tabs>
