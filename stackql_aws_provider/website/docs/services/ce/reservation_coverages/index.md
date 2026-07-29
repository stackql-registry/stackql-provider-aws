--- 
title: reservation_coverages
hide_title: false
hide_table_of_contents: false
keywords:
  - reservation_coverages
  - ce
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

Creates, updates, deletes, gets or lists a <code>reservation_coverages</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="reservation_coverages" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ce.reservation_coverages" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_reservation_coverage"
    values={[
        { label: 'get_reservation_coverage', value: 'get_reservation_coverage' }
    ]}
>
<TabItem value="get_reservation_coverage">

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
    <td><CopyableCode code="coverages_by_time" /></td>
    <td><code>array</code></td>
    <td>The amount of time that your reservations covered.</td>
</tr>
<tr>
    <td><CopyableCode code="next_page_token" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of retrievable results. Amazon Web Services provides the token when the response from a previous call has more results than the maximum page size. (pattern: &lt;code&gt;&#91;\S\s&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="total" /></td>
    <td><code>object</code></td>
    <td>The total amount of instance usage that a reservation covered.</td>
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
    <td><a href="#get_reservation_coverage"><CopyableCode code="get_reservation_coverage" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the reservation coverage for your account, which you can use to see how much of your Amazon Elastic Compute Cloud, Amazon ElastiCache, Amazon Relational Database Service, or Amazon Redshift usage is covered by a reservation. An organization's management account can see the coverage of the associated member accounts. This supports dimensions, cost categories, and nested expressions. For any time period, you can filter data about reservation usage by the following dimensions: AZ CACHE_ENGINE DATABASE_ENGINE DEPLOYMENT_OPTION INSTANCE_TYPE LINKED_ACCOUNT OPERATING_SYSTEM PLATFORM REGION SERVICE TAG TENANCY To determine valid values for a dimension, use the GetDimensionValues operation.</td>
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
    defaultValue="get_reservation_coverage"
    values={[
        { label: 'get_reservation_coverage', value: 'get_reservation_coverage' }
    ]}
>
<TabItem value="get_reservation_coverage">

Retrieves the reservation coverage for your account, which you can use to see how much of your Amazon Elastic Compute Cloud, Amazon ElastiCache, Amazon Relational Database Service, or Amazon Redshift usage is covered by a reservation. An organization's management account can see the coverage of the associated member accounts. This supports dimensions, cost categories, and nested expressions. For any time period, you can filter data about reservation usage by the following dimensions: AZ CACHE_ENGINE DATABASE_ENGINE DEPLOYMENT_OPTION INSTANCE_TYPE LINKED_ACCOUNT OPERATING_SYSTEM PLATFORM REGION SERVICE TAG TENANCY To determine valid values for a dimension, use the GetDimensionValues operation.

```sql
SELECT
coverages_by_time,
next_page_token,
total
FROM aws.ce.reservation_coverages
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
