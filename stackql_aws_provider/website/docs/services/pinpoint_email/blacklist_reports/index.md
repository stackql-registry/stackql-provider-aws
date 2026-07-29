--- 
title: blacklist_reports
hide_title: false
hide_table_of_contents: false
keywords:
  - blacklist_reports
  - pinpoint_email
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

Creates, updates, deletes, gets or lists a <code>blacklist_reports</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="blacklist_reports" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.pinpoint_email.blacklist_reports" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_blacklist_reports"
    values={[
        { label: 'get_blacklist_reports', value: 'get_blacklist_reports' }
    ]}
>
<TabItem value="get_blacklist_reports">

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
    <td><CopyableCode code="blacklist_report" /></td>
    <td><code>object</code></td>
    <td>An object that contains information about a blacklist that one of your dedicated IP addresses appears on.</td>
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
    <td><a href="#get_blacklist_reports"><CopyableCode code="get_blacklist_reports" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-BlacklistItemNames"><code>BlacklistItemNames</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieve a list of the blacklists that your dedicated IP addresses appear on.</td>
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
<tr id="parameter-BlacklistItemNames">
    <td><CopyableCode code="BlacklistItemNames" /></td>
    <td><code>array</code></td>
    <td>A list of IP addresses that you want to retrieve blacklist information about. You can only specify the dedicated IP addresses that you use to send email using Amazon Pinpoint or Amazon SES.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_blacklist_reports"
    values={[
        { label: 'get_blacklist_reports', value: 'get_blacklist_reports' }
    ]}
>
<TabItem value="get_blacklist_reports">

Retrieve a list of the blacklists that your dedicated IP addresses appear on.

```sql
SELECT
blacklist_report
FROM aws.pinpoint_email.blacklist_reports
WHERE BlacklistItemNames = '{{ BlacklistItemNames }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
