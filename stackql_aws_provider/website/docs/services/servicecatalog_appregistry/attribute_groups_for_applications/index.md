--- 
title: attribute_groups_for_applications
hide_title: false
hide_table_of_contents: false
keywords:
  - attribute_groups_for_applications
  - servicecatalog_appregistry
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

Creates, updates, deletes, gets or lists an <code>attribute_groups_for_applications</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="attribute_groups_for_applications" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.servicecatalog_appregistry.attribute_groups_for_applications" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_attribute_groups_for_application"
    values={[
        { label: 'list_attribute_groups_for_application', value: 'list_attribute_groups_for_application' }
    ]}
>
<TabItem value="list_attribute_groups_for_application">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the attribute group. (pattern: &lt;code&gt;&#91;-.\w&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>This field is no longer supported. We recommend you don't use the field when using ListAttributeGroupsForApplication. The name of the attribute group. (pattern: &lt;code&gt;&#91;-.\w&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon resource name (ARN) that specifies the attribute group. (pattern: &lt;code&gt;arn:aws&#91;-a-z&#93;*:servicecatalog:&#91;a-z&#93;&#123;2&#125;(-gov)?-&#91;a-z&#93;+-\d:\d&#123;12&#125;:/attribute-groups/&#91;-.\w&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_by" /></td>
    <td><code>string</code></td>
    <td>The service principal that created the attribute group. (pattern: &lt;code&gt;^(?!-)(&#91;a-z0-9-&#93;+\.)+(aws\.internal|amazonaws\.com(\.cn)?)$&lt;/code&gt;)</td>
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
    <td><a href="#list_attribute_groups_for_application"><CopyableCode code="list_attribute_groups_for_application" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-application"><code>application</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Lists the details of all attribute groups associated with a specific application. The results display in pages.</td>
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
<tr id="parameter-application">
    <td><CopyableCode code="application" /></td>
    <td><code>string</code></td>
    <td>The name or ID of the application.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The upper bound of the number of results to return. The value cannot exceed 25. If you omit this parameter, it defaults to 25. This value is optional.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>This token retrieves the next page of results after a previous API call.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_attribute_groups_for_application"
    values={[
        { label: 'list_attribute_groups_for_application', value: 'list_attribute_groups_for_application' }
    ]}
>
<TabItem value="list_attribute_groups_for_application">

Lists the details of all attribute groups associated with a specific application. The results display in pages.

```sql
SELECT
id,
name,
arn,
created_by
FROM aws.servicecatalog_appregistry.attribute_groups_for_applications
WHERE application = '{{ application }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>
