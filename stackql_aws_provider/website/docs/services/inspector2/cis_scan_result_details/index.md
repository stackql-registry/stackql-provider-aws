--- 
title: cis_scan_result_details
hide_title: false
hide_table_of_contents: false
keywords:
  - cis_scan_result_details
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

Creates, updates, deletes, gets or lists a <code>cis_scan_result_details</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="cis_scan_result_details" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.inspector2.cis_scan_result_details" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_cis_scan_result_details"
    values={[
        { label: 'get_cis_scan_result_details', value: 'get_cis_scan_result_details' }
    ]}
>
<TabItem value="get_cis_scan_result_details">

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
    <td>The CIS scan result details' account ID. (pattern: &lt;code&gt;\d&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="check_description" /></td>
    <td><code>string</code></td>
    <td>The account ID that's associated with the CIS scan result details.</td>
</tr>
<tr>
    <td><CopyableCode code="check_id" /></td>
    <td><code>string</code></td>
    <td>The CIS scan result details' check ID.</td>
</tr>
<tr>
    <td><CopyableCode code="finding_arn" /></td>
    <td><code>string</code></td>
    <td>The CIS scan result details' finding ARN. (pattern: &lt;code&gt;arn:aws(-gov|-cn)?:inspector2:&#91;-.a-z0-9&#93;&#123;0,20&#125;:\d&#123;12&#125;:owner/\d&#123;12&#125;/cis-finding/&#91;0-9a-fA-F&#93;&#123;8&#125;-&#91;0-9a-fA-F&#93;&#123;4&#125;-&#91;0-9a-fA-F&#93;&#123;4&#125;-&#91;0-9a-fA-F&#93;&#123;4&#125;-&#91;0-9a-fA-F&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="level" /></td>
    <td><code>string</code></td>
    <td>The CIS scan result details' level. (LEVEL_1, LEVEL_2)</td>
</tr>
<tr>
    <td><CopyableCode code="platform" /></td>
    <td><code>string</code></td>
    <td>The CIS scan result details' platform.</td>
</tr>
<tr>
    <td><CopyableCode code="remediation" /></td>
    <td><code>string</code></td>
    <td>The CIS scan result details' remediation.</td>
</tr>
<tr>
    <td><CopyableCode code="scan_arn" /></td>
    <td><code>string</code></td>
    <td>The CIS scan result details' scan ARN. (pattern: &lt;code&gt;arn:aws(-us-gov|-cn)?:inspector2:&#91;-.a-z0-9&#93;&#123;0,20&#125;:\d&#123;12&#125;:owner/(\d&#123;12&#125;|o-&#91;a-z0-9&#93;&#123;10,32&#125;)/cis-scan/&#91;0-9a-fA-F&#93;&#123;8&#125;-&#91;0-9a-fA-F&#93;&#123;4&#125;-&#91;0-9a-fA-F&#93;&#123;4&#125;-&#91;0-9a-fA-F&#93;&#123;4&#125;-&#91;0-9a-fA-F&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The CIS scan result details' status. (PASSED, FAILED, SKIPPED)</td>
</tr>
<tr>
    <td><CopyableCode code="status_reason" /></td>
    <td><code>string</code></td>
    <td>The CIS scan result details' status reason.</td>
</tr>
<tr>
    <td><CopyableCode code="target_resource_id" /></td>
    <td><code>string</code></td>
    <td>The CIS scan result details' target resource ID. (pattern: &lt;code&gt;.*(^arn:.*:ecr:.*:\d&#123;12&#125;:repository\/&#91;a-zA-Z0-9._\/-&#93;+(\/sha256:&#91;a-z0-9&#93;&#123;64&#125;)?$)|(^i-(&#91;a-z0-9&#93;&#123;8&#125;|&#91;a-z0-9&#93;&#123;17&#125;|\\*)$|(^arn:(aws&#91;a-zA-Z-&#93;*)?:lambda:&#91;a-z&#93;&#123;2&#125;(-gov)?-&#91;a-z&#93;+-\d&#123;1&#125;:\d&#123;12&#125;:function:&#91;a-zA-Z0-9-_\.&#93;+(:(\$LATEST|&#91;a-zA-Z0-9-_&#93;+))?$)|(^arn:(aws&#91;a-zA-Z-&#93;*)?:inspector2:&#91;a-z&#93;&#123;2&#125;(-gov)?-&#91;a-z&#93;+-\d&#123;1&#125;:\d&#123;12&#125;:codesecurity-integration\/&#91;a-f0-9-&#93;&#123;36&#125;\/project-&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;$))|(^\/subscriptions\/&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;\/resourcegroups\/&#91;a-z0-9_\-\.()&#93;+\/providers\/(microsoft\.compute\/virtualmachines\/&#91;a-z0-9_\-&#93;+|microsoft\.web\/sites\/&#91;a-z0-9_\-&#93;+|microsoft\.containerregistry\/registries\/&#91;a-z0-9_\-&#93;+(\/repositories\/&#91;a-z0-9_\-\/&#93;+\/images?\/sha256:&#91;a-f0-9&#93;&#123;64&#125;)?)$).*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="title_" /></td>
    <td><code>string</code></td>
    <td>The CIS scan result details' title.</td>
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
    <td><a href="#get_cis_scan_result_details"><CopyableCode code="get_cis_scan_result_details" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves CIS scan result details.</td>
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
    defaultValue="get_cis_scan_result_details"
    values={[
        { label: 'get_cis_scan_result_details', value: 'get_cis_scan_result_details' }
    ]}
>
<TabItem value="get_cis_scan_result_details">

Retrieves CIS scan result details.

```sql
SELECT
account_id,
check_description,
check_id,
finding_arn,
level,
platform,
remediation,
scan_arn,
status,
status_reason,
target_resource_id,
title_
FROM aws.inspector2.cis_scan_result_details
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
