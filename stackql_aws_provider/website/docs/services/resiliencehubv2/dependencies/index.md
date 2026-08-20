--- 
title: dependencies
hide_title: false
hide_table_of_contents: false
keywords:
  - dependencies
  - resiliencehubv2
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

Creates, updates, deletes, gets or lists a <code>dependencies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="dependencies" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.resiliencehubv2.dependencies" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_dependencies"
    values={[
        { label: 'list_dependencies', value: 'list_dependencies' }
    ]}
>
<TabItem value="list_dependencies">

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
    <td><CopyableCode code="comment" /></td>
    <td><code>string</code></td>
    <td>A user-provided comment about the dependency.</td>
</tr>
<tr>
    <td><CopyableCode code="criticality" /></td>
    <td><code>string</code></td>
    <td>The criticality level of the dependency. (HARD, SOFT, UNKNOWN)</td>
</tr>
<tr>
    <td><CopyableCode code="dependency_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the dependency. (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-5&#93;&#91;0-9a-f&#93;&#123;3&#125;-&#91;089ab&#93;&#91;0-9a-f&#93;&#123;3&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="dependency_name" /></td>
    <td><code>string</code></td>
    <td>The name of the dependency.</td>
</tr>
<tr>
    <td><CopyableCode code="dns_name" /></td>
    <td><code>string</code></td>
    <td>The DNS name associated with the dependency.</td>
</tr>
<tr>
    <td><CopyableCode code="last_detected_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the dependency was last detected.</td>
</tr>
<tr>
    <td><CopyableCode code="location" /></td>
    <td><code>string</code></td>
    <td>The location of the dependency.</td>
</tr>
<tr>
    <td><CopyableCode code="provider" /></td>
    <td><code>string</code></td>
    <td>The provider of the dependency.</td>
</tr>
<tr>
    <td><CopyableCode code="query_range" /></td>
    <td><code>object</code></td>
    <td>The query range data for the dependency.</td>
</tr>
<tr>
    <td><CopyableCode code="service_arn" /></td>
    <td><code>string</code></td>
    <td>ARN identifier. (pattern: &lt;code&gt;arn:(aws|aws-cn|aws-iso|aws-iso-&#91;a-z&#93;&#123;1&#125;|aws-us-gov):&#91;A-Za-z0-9&#93;&#91;A-Za-z0-9_/.-&#93;&#123;0,62&#125;:(&#91;a-z&#93;&#123;2&#125;-((iso&#91;a-z&#93;&#123;0,1&#125;-)|(gov-))&#123;0,1&#125;&#91;a-z&#93;+-&#91;0-9&#93;):&#91;0-9&#93;&#123;12&#125;:&#91;A-Za-z0-9/&#93;&#91;A-Za-z0-9:_/+.-&#93;&#123;0,1023&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="source_regions" /></td>
    <td><code>array</code></td>
    <td>The source Regions from which the dependency was detected.</td>
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
    <td><a href="#list_dependencies"><CopyableCode code="list_dependencies" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-serviceArn"><code>serviceArn</code></a>, <a href="#parameter-queryRangeStartTime"><code>queryRangeStartTime</code></a>, <a href="#parameter-queryRangeEndTime"><code>queryRangeEndTime</code></a>, <a href="#parameter-queryRangeGranularity"><code>queryRangeGranularity</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Lists dependencies discovered for services.</td>
</tr>
<tr>
    <td><a href="#update_dependency"><CopyableCode code="update_dependency" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-serviceArn"><code>serviceArn</code></a>, <a href="#parameter-dependencyId"><code>dependencyId</code></a></td>
    <td></td>
    <td>Updates a dependency classification.</td>
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
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-queryRangeEndTime">
    <td><CopyableCode code="queryRangeEndTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The end time for the dependency query range.</td>
</tr>
<tr id="parameter-queryRangeGranularity">
    <td><CopyableCode code="queryRangeGranularity" /></td>
    <td><code>string</code></td>
    <td>The granularity for the dependency query range.</td>
</tr>
<tr id="parameter-queryRangeStartTime">
    <td><CopyableCode code="queryRangeStartTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The start time for the dependency query range.</td>
</tr>
<tr id="parameter-serviceArn">
    <td><CopyableCode code="serviceArn" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_dependencies"
    values={[
        { label: 'list_dependencies', value: 'list_dependencies' }
    ]}
>
<TabItem value="list_dependencies">

Lists dependencies discovered for services.

```sql
SELECT
comment,
criticality,
dependency_id,
dependency_name,
dns_name,
last_detected_time,
location,
provider,
query_range,
service_arn,
source_regions
FROM aws.resiliencehubv2.dependencies
WHERE region = '{{ region }}' -- required
AND serviceArn = '{{ serviceArn }}'
AND queryRangeStartTime = '{{ queryRangeStartTime }}'
AND queryRangeEndTime = '{{ queryRangeEndTime }}'
AND queryRangeGranularity = '{{ queryRangeGranularity }}'
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_dependency"
    values={[
        { label: 'update_dependency', value: 'update_dependency' }
    ]}
>
<TabItem value="update_dependency">

Updates a dependency classification.

```sql
UPDATE aws.resiliencehubv2.dependencies
SET 
serviceArn = '{{ serviceArn }}',
dependencyId = '{{ dependencyId }}',
criticality = '{{ criticality }}',
comment = '{{ comment }}'
WHERE 
region = '{{ region }}' --required
AND serviceArn = '{{ serviceArn }}' --required
AND dependencyId = '{{ dependencyId }}' --required
RETURNING
comment,
criticality,
dependency_id,
dependency_name,
location,
provider,
updated_at;
```
</TabItem>
</Tabs>
