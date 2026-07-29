--- 
title: cis_scans
hide_title: false
hide_table_of_contents: false
keywords:
  - cis_scans
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

Creates, updates, deletes, gets or lists a <code>cis_scans</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="cis_scans" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.inspector2.cis_scans" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_cis_scans"
    values={[
        { label: 'list_cis_scans', value: 'list_cis_scans' }
    ]}
>
<TabItem value="list_cis_scans">

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
    <td><CopyableCode code="failed_checks" /></td>
    <td><code>integer</code></td>
    <td>The CIS scan's failed checks.</td>
</tr>
<tr>
    <td><CopyableCode code="scan_arn" /></td>
    <td><code>string</code></td>
    <td>The CIS scan's ARN. (pattern: &lt;code&gt;arn:aws(-us-gov|-cn)?:inspector2:&#91;-.a-z0-9&#93;&#123;0,20&#125;:\d&#123;12&#125;:owner/(\d&#123;12&#125;|o-&#91;a-z0-9&#93;&#123;10,32&#125;)/cis-scan/&#91;0-9a-fA-F&#93;&#123;8&#125;-&#91;0-9a-fA-F&#93;&#123;4&#125;-&#91;0-9a-fA-F&#93;&#123;4&#125;-&#91;0-9a-fA-F&#93;&#123;4&#125;-&#91;0-9a-fA-F&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="scan_configuration_arn" /></td>
    <td><code>string</code></td>
    <td>The CIS scan's configuration ARN. (pattern: &lt;code&gt;arn:aws(-us-gov|-cn)?:inspector2:&#91;a-z&#93;&#123;2&#125;(-gov)?-&#91;a-z&#93;+-&#91;0-9&#93;&#123;1&#125;:&#91;0-9&#93;&#123;12&#125;:owner/(o-&#91;a-z0-9&#93;+|&#91;0-9&#93;&#123;12&#125;)/cis-configuration/&#91;0-9a-fA-F-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="scan_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The CIS scan's date.</td>
</tr>
<tr>
    <td><CopyableCode code="scan_name" /></td>
    <td><code>string</code></td>
    <td>The the name of the scan configuration that's associated with this scan.</td>
</tr>
<tr>
    <td><CopyableCode code="scheduled_by" /></td>
    <td><code>string</code></td>
    <td>The account or organization that schedules the CIS scan.</td>
</tr>
<tr>
    <td><CopyableCode code="security_level" /></td>
    <td><code>string</code></td>
    <td>The security level for the CIS scan. Security level refers to the Benchmark levels that CIS assigns to a profile. (LEVEL_1, LEVEL_2)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The CIS scan's status. (FAILED, COMPLETED, CANCELLED, IN_PROGRESS)</td>
</tr>
<tr>
    <td><CopyableCode code="targets" /></td>
    <td><code>object</code></td>
    <td>The CIS scan's targets.</td>
</tr>
<tr>
    <td><CopyableCode code="total_checks" /></td>
    <td><code>integer</code></td>
    <td>The CIS scan's total checks.</td>
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
    <td><a href="#list_cis_scans"><CopyableCode code="list_cis_scans" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a CIS scan list.</td>
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
    defaultValue="list_cis_scans"
    values={[
        { label: 'list_cis_scans', value: 'list_cis_scans' }
    ]}
>
<TabItem value="list_cis_scans">

Returns a CIS scan list.

```sql
SELECT
failed_checks,
scan_arn,
scan_configuration_arn,
scan_date,
scan_name,
scheduled_by,
security_level,
status,
targets,
total_checks
FROM aws.inspector2.cis_scans
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
