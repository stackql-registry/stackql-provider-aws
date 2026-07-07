--- 
title: managed_thing_account_associations
hide_title: false
hide_table_of_contents: false
keywords:
  - managed_thing_account_associations
  - iot_managed_integrations
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

Creates, updates, deletes, gets or lists a <code>managed_thing_account_associations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="managed_thing_account_associations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iot_managed_integrations.managed_thing_account_associations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_managed_thing_account_associations"
    values={[
        { label: 'list_managed_thing_account_associations', value: 'list_managed_thing_account_associations' }
    ]}
>
<TabItem value="list_managed_thing_account_associations">

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
    <td><CopyableCode code="AccountAssociationId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the account association in the association. (pattern: &lt;code&gt;&#91;0-9a-zA-Z&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ManagedThingAssociationStatus" /></td>
    <td><code>string</code></td>
    <td>The status of the registration between the managed thing and the account association. Indicates whether the device is pre-associated or fully associated with the account association. (PRE_ASSOCIATED, ASSOCIATED)</td>
</tr>
<tr>
    <td><CopyableCode code="ManagedThingId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the managed thing in the association. (pattern: &lt;code&gt;&#91;a-zA-Z0-9:_-&#93;*&lt;/code&gt;)</td>
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
    <td><a href="#list_managed_thing_account_associations"><CopyableCode code="list_managed_thing_account_associations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-ManagedThingId"><code>ManagedThingId</code></a>, <a href="#parameter-AccountAssociationId"><code>AccountAssociationId</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a></td>
    <td>Lists all account associations for a specific managed thing.</td>
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
<tr id="parameter-AccountAssociationId">
    <td><CopyableCode code="AccountAssociationId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the account association to filter results by. When specified, only associations with this account association ID will be returned.</td>
</tr>
<tr id="parameter-ManagedThingId">
    <td><CopyableCode code="ManagedThingId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the managed thing to list account associations for.</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of account associations to return in a single response.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>A token used for pagination of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_managed_thing_account_associations"
    values={[
        { label: 'list_managed_thing_account_associations', value: 'list_managed_thing_account_associations' }
    ]}
>
<TabItem value="list_managed_thing_account_associations">

Lists all account associations for a specific managed thing.

```sql
SELECT
AccountAssociationId,
ManagedThingAssociationStatus,
ManagedThingId
FROM aws.iot_managed_integrations.managed_thing_account_associations
WHERE region = '{{ region }}' -- required
AND ManagedThingId = '{{ ManagedThingId }}'
AND AccountAssociationId = '{{ AccountAssociationId }}'
AND MaxResults = '{{ MaxResults }}'
AND NextToken = '{{ NextToken }}'
;
```
</TabItem>
</Tabs>
