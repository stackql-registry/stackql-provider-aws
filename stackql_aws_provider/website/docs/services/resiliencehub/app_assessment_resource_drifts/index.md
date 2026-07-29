--- 
title: app_assessment_resource_drifts
hide_title: false
hide_table_of_contents: false
keywords:
  - app_assessment_resource_drifts
  - resiliencehub
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

Creates, updates, deletes, gets or lists an <code>app_assessment_resource_drifts</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="app_assessment_resource_drifts" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.resiliencehub.app_assessment_resource_drifts" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_app_assessment_resource_drifts"
    values={[
        { label: 'list_app_assessment_resource_drifts', value: 'list_app_assessment_resource_drifts' }
    ]}
>
<TabItem value="list_app_assessment_resource_drifts">

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
    <td><CopyableCode code="app_arn" /></td>
    <td><code>string</code></td>
    <td>Amazon Resource Name (ARN) of the application whose resources have drifted. The format for this ARN is: arn:partition:resiliencehub:region:account:app-assessment/app-id. For more information about ARNs, see Amazon Resource Names (ARNs) in the Amazon Web Services General Reference guide. (pattern: &lt;code&gt;^arn:(aws|aws-cn|aws-iso|aws-iso-&#91;a-z&#93;&#123;1&#125;|aws-us-gov):&#91;A-Za-z0-9&#93;&#91;A-Za-z0-9_/.-&#93;&#123;0,62&#125;:(&#91;a-z&#93;&#123;2&#125;-((iso&#91;a-z&#93;&#123;0,1&#125;-)|(gov-))&#123;0,1&#125;&#91;a-z&#93;+-&#91;0-9&#93;):&#91;0-9&#93;&#123;12&#125;:&#91;A-Za-z0-9/&#93;&#91;A-Za-z0-9:_/+.-&#93;&#123;0,1023&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="app_version" /></td>
    <td><code>string</code></td>
    <td>Version of the application whose resources have drifted. (pattern: &lt;code&gt;^\S&#123;1,50&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="diff_type" /></td>
    <td><code>string</code></td>
    <td>Indicates if the resource was added or removed. (NotEqual, Added, Removed)</td>
</tr>
<tr>
    <td><CopyableCode code="reference_id" /></td>
    <td><code>string</code></td>
    <td>Reference identifier of the resource drift. (pattern: &lt;code&gt;^\S&#123;1,255&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="resource_identifier" /></td>
    <td><code>object</code></td>
    <td>Identifier of the drifted resource.</td>
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
    <td><a href="#list_app_assessment_resource_drifts"><CopyableCode code="list_app_assessment_resource_drifts" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>List of resource drifts that were detected while running an assessment.</td>
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
    defaultValue="list_app_assessment_resource_drifts"
    values={[
        { label: 'list_app_assessment_resource_drifts', value: 'list_app_assessment_resource_drifts' }
    ]}
>
<TabItem value="list_app_assessment_resource_drifts">

List of resource drifts that were detected while running an assessment.

```sql
SELECT
app_arn,
app_version,
diff_type,
reference_id,
resource_identifier
FROM aws.resiliencehub.app_assessment_resource_drifts
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
