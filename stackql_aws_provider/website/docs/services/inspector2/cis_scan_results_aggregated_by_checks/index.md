--- 
title: cis_scan_results_aggregated_by_checks
hide_title: false
hide_table_of_contents: false
keywords:
  - cis_scan_results_aggregated_by_checks
  - inspector2
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

Creates, updates, deletes, gets or lists a <code>cis_scan_results_aggregated_by_checks</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="cis_scan_results_aggregated_by_checks" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.inspector2.cis_scan_results_aggregated_by_checks" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_cis_scan_results_aggregated_by_checks"
    values={[
        { label: 'list_cis_scan_results_aggregated_by_checks', value: 'list_cis_scan_results_aggregated_by_checks' }
    ]}
>
<TabItem value="list_cis_scan_results_aggregated_by_checks">

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
    <td><CopyableCode code="account_id" /></td>
    <td><code>string</code></td>
    <td>The account ID for the CIS check. (pattern: &lt;code&gt;\d&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="check_description" /></td>
    <td><code>string</code></td>
    <td>The description for the CIS check.</td>
</tr>
<tr>
    <td><CopyableCode code="check_id" /></td>
    <td><code>string</code></td>
    <td>The check ID for the CIS check.</td>
</tr>
<tr>
    <td><CopyableCode code="level" /></td>
    <td><code>string</code></td>
    <td>The CIS check level. (LEVEL_1, LEVEL_2)</td>
</tr>
<tr>
    <td><CopyableCode code="platform" /></td>
    <td><code>string</code></td>
    <td>The CIS check platform.</td>
</tr>
<tr>
    <td><CopyableCode code="scan_arn" /></td>
    <td><code>string</code></td>
    <td>The scan ARN for the CIS check scan ARN. (pattern: &lt;code&gt;arn:aws(-us-gov|-cn)?:inspector2:&#91;-.a-z0-9&#93;&#123;0,20&#125;:\d&#123;12&#125;:owner/(\d&#123;12&#125;|o-&#91;a-z0-9&#93;&#123;10,32&#125;)/cis-scan/&#91;0-9a-fA-F&#93;&#123;8&#125;-&#91;0-9a-fA-F&#93;&#123;4&#125;-&#91;0-9a-fA-F&#93;&#123;4&#125;-&#91;0-9a-fA-F&#93;&#123;4&#125;-&#91;0-9a-fA-F&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status_counts" /></td>
    <td><code>object</code></td>
    <td>The CIS check status counts.</td>
</tr>
<tr>
    <td><CopyableCode code="title_" /></td>
    <td><code>string</code></td>
    <td>The CIS check title.</td>
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
    <td><a href="#list_cis_scan_results_aggregated_by_checks"><CopyableCode code="list_cis_scan_results_aggregated_by_checks" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists scan results aggregated by checks.</td>
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
    defaultValue="list_cis_scan_results_aggregated_by_checks"
    values={[
        { label: 'list_cis_scan_results_aggregated_by_checks', value: 'list_cis_scan_results_aggregated_by_checks' }
    ]}
>
<TabItem value="list_cis_scan_results_aggregated_by_checks">

Lists scan results aggregated by checks.

```sql
SELECT
account_id,
check_description,
check_id,
level,
platform,
scan_arn,
status_counts,
title_
FROM aws.inspector2.cis_scan_results_aggregated_by_checks
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
