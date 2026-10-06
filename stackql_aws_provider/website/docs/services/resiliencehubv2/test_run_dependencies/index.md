--- 
title: test_run_dependencies
hide_title: false
hide_table_of_contents: false
keywords:
  - test_run_dependencies
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

Creates, updates, deletes, gets or lists a <code>test_run_dependencies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="test_run_dependencies" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.resiliencehubv2.test_run_dependencies" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_test_run_dependencies"
    values={[
        { label: 'list_test_run_dependencies', value: 'list_test_run_dependencies' }
    ]}
>
<TabItem value="list_test_run_dependencies">

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
    <td><CopyableCode code="criticality" /></td>
    <td><code>string</code></td>
    <td>The criticality classification of the dependency when the run started. A dependency that was not discovered has the UNKNOWN criticality. (HARD, SOFT, UNKNOWN)</td>
</tr>
<tr>
    <td><CopyableCode code="dependency_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the dependency. Absent when the dependency was entered manually and was not part of dependency discovery. (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-5&#93;&#91;0-9a-f&#93;&#123;3&#125;-&#91;089ab&#93;&#91;0-9a-f&#93;&#123;3&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="dependency_name" /></td>
    <td><code>string</code></td>
    <td>The name of the dependency.</td>
</tr>
<tr>
    <td><CopyableCode code="dns_name" /></td>
    <td><code>string</code></td>
    <td>The DNS name of the dependency that the test run blocked.</td>
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
    <td><CopyableCode code="source" /></td>
    <td><code>string</code></td>
    <td>The origin of the dependency. A discovered dependency was found by dependency discovery; a manual dependency was entered when the run started. (DISCOVERED, MANUAL)</td>
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
    <td><a href="#list_test_run_dependencies"><CopyableCode code="list_test_run_dependencies" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-test_run_id"><code>test_run_id</code></a>, <a href="#parameter-serviceArn"><code>serviceArn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Lists the dependencies that a test run blocked. Each dependency reflects the discovered classification captured when the run started, so results do not change if a dependency is reclassified after the run.</td>
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
<tr id="parameter-serviceArn">
    <td><CopyableCode code="serviceArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the service the test run belongs to.</td>
</tr>
<tr id="parameter-test_run_id">
    <td><CopyableCode code="test_run_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the test run to list dependencies for.</td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_test_run_dependencies"
    values={[
        { label: 'list_test_run_dependencies', value: 'list_test_run_dependencies' }
    ]}
>
<TabItem value="list_test_run_dependencies">

Lists the dependencies that a test run blocked. Each dependency reflects the discovered classification captured when the run started, so results do not change if a dependency is reclassified after the run.

```sql
SELECT
criticality,
dependency_id,
dependency_name,
dns_name,
location,
provider,
source,
source_regions
FROM aws.resiliencehubv2.test_run_dependencies
WHERE test_run_id = '{{ test_run_id }}' -- required
AND serviceArn = '{{ serviceArn }}' -- required
AND region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>
