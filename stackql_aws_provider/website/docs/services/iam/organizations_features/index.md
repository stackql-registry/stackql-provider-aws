--- 
title: organizations_features
hide_title: false
hide_table_of_contents: false
keywords:
  - organizations_features
  - iam
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

Creates, updates, deletes, gets or lists an <code>organizations_features</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="organizations_features" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iam.organizations_features" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_organizations_features"
    values={[
        { label: 'list_organizations_features', value: 'list_organizations_features' }
    ]}
>
<TabItem value="list_organizations_features">

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
    <td><CopyableCode code="organization_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier (ID) of an organization.</td>
</tr>
<tr>
    <td><CopyableCode code="enabled_features" /></td>
    <td><code>array</code></td>
    <td>Specifies the features that are currently available in your organization.</td>
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
    <td><a href="#list_organizations_features"><CopyableCode code="list_organizations_features" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the centralized root access features enabled for your organization. For more information, see Centrally manage root access for member accounts.</td>
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
    defaultValue="list_organizations_features"
    values={[
        { label: 'list_organizations_features', value: 'list_organizations_features' }
    ]}
>
<TabItem value="list_organizations_features">

Lists the centralized root access features enabled for your organization. For more information, see Centrally manage root access for member accounts.

```sql
SELECT
organization_id,
enabled_features
FROM aws.iam.organizations_features
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
