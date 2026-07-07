--- 
title: checker_ip_ranges
hide_title: false
hide_table_of_contents: false
keywords:
  - checker_ip_ranges
  - route53
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

Creates, updates, deletes, gets or lists a <code>checker_ip_ranges</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="checker_ip_ranges" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.route53.checker_ip_ranges" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_checker_ip_ranges"
    values={[
        { label: 'get_checker_ip_ranges', value: 'get_checker_ip_ranges' }
    ]}
>
<TabItem value="get_checker_ip_ranges">

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
    <td><CopyableCode code="CheckerIpRanges" /></td>
    <td><code>string</code></td>
    <td>A complex type that contains sorted list of IP ranges in CIDR format for Amazon Route 53 health checkers.</td>
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
    <td><a href="#get_checker_ip_ranges"><CopyableCode code="get_checker_ip_ranges" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Route 53 does not perform authorization for this API because it retrieves information that is already available to the public. GetCheckerIpRanges still works, but we recommend that you download ip-ranges.json, which includes IP address ranges for all Amazon Web Services services. For more information, see IP Address Ranges of Amazon Route 53 Servers in the Amazon Route 53 Developer Guide.</td>
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
    defaultValue="get_checker_ip_ranges"
    values={[
        { label: 'get_checker_ip_ranges', value: 'get_checker_ip_ranges' }
    ]}
>
<TabItem value="get_checker_ip_ranges">

Route 53 does not perform authorization for this API because it retrieves information that is already available to the public. GetCheckerIpRanges still works, but we recommend that you download ip-ranges.json, which includes IP address ranges for all Amazon Web Services services. For more information, see IP Address Ranges of Amazon Route 53 Servers in the Amazon Route 53 Developer Guide.

```sql
SELECT
CheckerIpRanges
FROM aws.route53.checker_ip_ranges
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
