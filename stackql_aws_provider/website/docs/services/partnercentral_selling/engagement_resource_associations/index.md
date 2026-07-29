--- 
title: engagement_resource_associations
hide_title: false
hide_table_of_contents: false
keywords:
  - engagement_resource_associations
  - partnercentral_selling
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

Creates, updates, deletes, gets or lists an <code>engagement_resource_associations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="engagement_resource_associations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.partnercentral_selling.engagement_resource_associations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_engagement_resource_associations"
    values={[
        { label: 'list_engagement_resource_associations', value: 'list_engagement_resource_associations' }
    ]}
>
<TabItem value="list_engagement_resource_associations">

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
    <td><CopyableCode code="catalog" /></td>
    <td><code>string</code></td>
    <td>Indicates the environment in which the resource and engagement exist. (pattern: &lt;code&gt;&#91;a-zA-Z&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_by" /></td>
    <td><code>string</code></td>
    <td>The AWS account ID of the entity that owns the resource. Identifies the account responsible for or having primary control over the resource. (pattern: &lt;code&gt;(&#91;0-9&#93;&#123;12&#125;|\w&#123;1,12&#125;)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="engagement_id" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for the engagement associated with the resource. (pattern: &lt;code&gt;eng-&#91;0-9a-z&#93;&#123;14&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="resource_id" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for the specific resource. Varies depending on the resource type. (pattern: &lt;code&gt;O&#91;0-9&#93;&#123;1,19&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="resource_type" /></td>
    <td><code>string</code></td>
    <td>Categorizes the type of resource associated with the engagement. (Opportunity)</td>
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
    <td><a href="#list_engagement_resource_associations"><CopyableCode code="list_engagement_resource_associations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the associations between resources and engagements where the caller is a member and has at least one snapshot in the engagement.</td>
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
    defaultValue="list_engagement_resource_associations"
    values={[
        { label: 'list_engagement_resource_associations', value: 'list_engagement_resource_associations' }
    ]}
>
<TabItem value="list_engagement_resource_associations">

Lists the associations between resources and engagements where the caller is a member and has at least one snapshot in the engagement.

```sql
SELECT
catalog,
created_by,
engagement_id,
resource_id,
resource_type
FROM aws.partnercentral_selling.engagement_resource_associations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
