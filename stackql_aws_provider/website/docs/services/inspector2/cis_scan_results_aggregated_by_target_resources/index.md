--- 
title: cis_scan_results_aggregated_by_target_resources
hide_title: false
hide_table_of_contents: false
keywords:
  - cis_scan_results_aggregated_by_target_resources
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

Creates, updates, deletes, gets or lists a <code>cis_scan_results_aggregated_by_target_resources</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="cis_scan_results_aggregated_by_target_resources" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.inspector2.cis_scan_results_aggregated_by_target_resources" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_cis_scan_results_aggregated_by_target_resource"
    values={[
        { label: 'list_cis_scan_results_aggregated_by_target_resource', value: 'list_cis_scan_results_aggregated_by_target_resource' }
    ]}
>
<TabItem value="list_cis_scan_results_aggregated_by_target_resource">

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
    <td>The account ID for the CIS target resource. (pattern: &lt;code&gt;\d&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="platform" /></td>
    <td><code>string</code></td>
    <td>The platform for the CIS target resource.</td>
</tr>
<tr>
    <td><CopyableCode code="scan_arn" /></td>
    <td><code>string</code></td>
    <td>The scan ARN for the CIS target resource. (pattern: &lt;code&gt;arn:aws(-us-gov|-cn)?:inspector2:&#91;-.a-z0-9&#93;&#123;0,20&#125;:\d&#123;12&#125;:owner/(\d&#123;12&#125;|o-&#91;a-z0-9&#93;&#123;10,32&#125;)/cis-scan/&#91;0-9a-fA-F&#93;&#123;8&#125;-&#91;0-9a-fA-F&#93;&#123;4&#125;-&#91;0-9a-fA-F&#93;&#123;4&#125;-&#91;0-9a-fA-F&#93;&#123;4&#125;-&#91;0-9a-fA-F&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status_counts" /></td>
    <td><code>object</code></td>
    <td>The target resource status counts.</td>
</tr>
<tr>
    <td><CopyableCode code="target_resource_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the target resource. (pattern: &lt;code&gt;.*(^arn:.*:ecr:.*:\d&#123;12&#125;:repository\/&#91;a-zA-Z0-9._\/-&#93;+(\/sha256:&#91;a-z0-9&#93;&#123;64&#125;)?$)|(^i-(&#91;a-z0-9&#93;&#123;8&#125;|&#91;a-z0-9&#93;&#123;17&#125;|\\*)$|(^arn:(aws&#91;a-zA-Z-&#93;*)?:lambda:&#91;a-z&#93;&#123;2&#125;(-gov)?-&#91;a-z&#93;+-\d&#123;1&#125;:\d&#123;12&#125;:function:&#91;a-zA-Z0-9-_\.&#93;+(:(\$LATEST|&#91;a-zA-Z0-9-_&#93;+))?$)|(^arn:(aws&#91;a-zA-Z-&#93;*)?:inspector2:&#91;a-z&#93;&#123;2&#125;(-gov)?-&#91;a-z&#93;+-\d&#123;1&#125;:\d&#123;12&#125;:codesecurity-integration\/&#91;a-f0-9-&#93;&#123;36&#125;\/project-&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;$))|(^\/subscriptions\/&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;\/resourcegroups\/&#91;a-z0-9_\-\.()&#93;+\/providers\/(microsoft\.compute\/virtualmachines\/&#91;a-z0-9_\-&#93;+|microsoft\.web\/sites\/&#91;a-z0-9_\-&#93;+|microsoft\.containerregistry\/registries\/&#91;a-z0-9_\-&#93;+(\/repositories\/&#91;a-z0-9_\-\/&#93;+\/images?\/sha256:&#91;a-f0-9&#93;&#123;64&#125;)?)$).*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="target_resource_tags" /></td>
    <td><code>object</code></td>
    <td>The tag for the target resource.</td>
</tr>
<tr>
    <td><CopyableCode code="target_status" /></td>
    <td><code>string</code></td>
    <td>The status of the target resource. (TIMED_OUT, CANCELLED, COMPLETED)</td>
</tr>
<tr>
    <td><CopyableCode code="target_status_reason" /></td>
    <td><code>string</code></td>
    <td>The reason for the target resource. (SCAN_IN_PROGRESS, UNSUPPORTED_OS, SSM_UNMANAGED)</td>
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
    <td><a href="#list_cis_scan_results_aggregated_by_target_resource"><CopyableCode code="list_cis_scan_results_aggregated_by_target_resource" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists scan results aggregated by a target resource.</td>
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
    defaultValue="list_cis_scan_results_aggregated_by_target_resource"
    values={[
        { label: 'list_cis_scan_results_aggregated_by_target_resource', value: 'list_cis_scan_results_aggregated_by_target_resource' }
    ]}
>
<TabItem value="list_cis_scan_results_aggregated_by_target_resource">

Lists scan results aggregated by a target resource.

```sql
SELECT
account_id,
platform,
scan_arn,
status_counts,
target_resource_id,
target_resource_tags,
target_status,
target_status_reason
FROM aws.inspector2.cis_scan_results_aggregated_by_target_resources
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
