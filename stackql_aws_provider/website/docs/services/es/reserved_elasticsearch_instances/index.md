--- 
title: reserved_elasticsearch_instances
hide_title: false
hide_table_of_contents: false
keywords:
  - reserved_elasticsearch_instances
  - es
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

Creates, updates, deletes, gets or lists a <code>reserved_elasticsearch_instances</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="reserved_elasticsearch_instances" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.es.reserved_elasticsearch_instances" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_reserved_elasticsearch_instances"
    values={[
        { label: 'describe_reserved_elasticsearch_instances', value: 'describe_reserved_elasticsearch_instances' }
    ]}
>
<TabItem value="describe_reserved_elasticsearch_instances">

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
    <td><CopyableCode code="CurrencyCode" /></td>
    <td><code>string</code></td>
    <td>The currency code for the reserved Elasticsearch instance offering.</td>
</tr>
<tr>
    <td><CopyableCode code="Duration" /></td>
    <td><code>integer</code></td>
    <td>The duration, in seconds, for which the Elasticsearch instance is reserved.</td>
</tr>
<tr>
    <td><CopyableCode code="ElasticsearchInstanceCount" /></td>
    <td><code>integer</code></td>
    <td>The number of Elasticsearch instances that have been reserved.</td>
</tr>
<tr>
    <td><CopyableCode code="ElasticsearchInstanceType" /></td>
    <td><code>string</code></td>
    <td>The Elasticsearch instance type offered by the reserved instance offering. (m3.medium.elasticsearch, m3.large.elasticsearch, m3.xlarge.elasticsearch, m3.2xlarge.elasticsearch, m4.large.elasticsearch, m4.xlarge.elasticsearch, m4.2xlarge.elasticsearch, m4.4xlarge.elasticsearch, m4.10xlarge.elasticsearch, m5.large.elasticsearch, m5.xlarge.elasticsearch, m5.2xlarge.elasticsearch, m5.4xlarge.elasticsearch, m5.12xlarge.elasticsearch, r5.large.elasticsearch, r5.xlarge.elasticsearch, r5.2xlarge.elasticsearch, r5.4xlarge.elasticsearch, r5.12xlarge.elasticsearch, c5.large.elasticsearch, c5.xlarge.elasticsearch, c5.2xlarge.elasticsearch, c5.4xlarge.elasticsearch, c5.9xlarge.elasticsearch, c5.18xlarge.elasticsearch, ultrawarm1.medium.elasticsearch, ultrawarm1.large.elasticsearch, t2.micro.elasticsearch, t2.small.elasticsearch, t2.medium.elasticsearch, r3.large.elasticsearch, r3.xlarge.elasticsearch, r3.2xlarge.elasticsearch, r3.4xlarge.elasticsearch, r3.8xlarge.elasticsearch, i2.xlarge.elasticsearch, i2.2xlarge.elasticsearch, d2.xlarge.elasticsearch, d2.2xlarge.elasticsearch, d2.4xlarge.elasticsearch, d2.8xlarge.elasticsearch, c4.large.elasticsearch, c4.xlarge.elasticsearch, c4.2xlarge.elasticsearch, c4.4xlarge.elasticsearch, c4.8xlarge.elasticsearch, r4.large.elasticsearch, r4.xlarge.elasticsearch, r4.2xlarge.elasticsearch, r4.4xlarge.elasticsearch, r4.8xlarge.elasticsearch, r4.16xlarge.elasticsearch, i3.large.elasticsearch, i3.xlarge.elasticsearch, i3.2xlarge.elasticsearch, i3.4xlarge.elasticsearch, i3.8xlarge.elasticsearch, i3.16xlarge.elasticsearch)</td>
</tr>
<tr>
    <td><CopyableCode code="FixedPrice" /></td>
    <td><code>number (double)</code></td>
    <td>The upfront fixed charge you will paid to purchase the specific reserved Elasticsearch instance offering.</td>
</tr>
<tr>
    <td><CopyableCode code="PaymentOption" /></td>
    <td><code>string</code></td>
    <td>The payment option as defined in the reserved Elasticsearch instance offering. (ALL_UPFRONT, PARTIAL_UPFRONT, NO_UPFRONT)</td>
</tr>
<tr>
    <td><CopyableCode code="RecurringCharges" /></td>
    <td><code>array</code></td>
    <td>The charge to your account regardless of whether you are creating any domains using the instance offering.</td>
</tr>
<tr>
    <td><CopyableCode code="ReservationName" /></td>
    <td><code>string</code></td>
    <td>The customer-specified identifier to track this reservation.</td>
</tr>
<tr>
    <td><CopyableCode code="ReservedElasticsearchInstanceId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the reservation. (pattern: &lt;code&gt;\p&#123;XDigit&#125;&#123;8&#125;-\p&#123;XDigit&#125;&#123;4&#125;-\p&#123;XDigit&#125;&#123;4&#125;-\p&#123;XDigit&#125;&#123;4&#125;-\p&#123;XDigit&#125;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ReservedElasticsearchInstanceOfferingId" /></td>
    <td><code>string</code></td>
    <td>The offering identifier.</td>
</tr>
<tr>
    <td><CopyableCode code="StartTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the reservation started.</td>
</tr>
<tr>
    <td><CopyableCode code="State" /></td>
    <td><code>string</code></td>
    <td>The state of the reserved Elasticsearch instance.</td>
</tr>
<tr>
    <td><CopyableCode code="UsagePrice" /></td>
    <td><code>number (double)</code></td>
    <td>The rate you are charged for each hour for the domain that is using this reserved instance.</td>
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
    <td><a href="#describe_reserved_elasticsearch_instances"><CopyableCode code="describe_reserved_elasticsearch_instances" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-reservationId"><code>reservationId</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Returns information about reserved Elasticsearch instances for this account.</td>
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
    <td>Set this value to limit the number of results returned. If not specified, defaults to 100.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>NextToken should be sent in case if earlier API call produced result containing NextToken. It is used for pagination.</td>
</tr>
<tr id="parameter-reservationId">
    <td><CopyableCode code="reservationId" /></td>
    <td><code>string</code></td>
    <td>The reserved instance identifier filter value. Use this parameter to show only the reservation that matches the specified reserved Elasticsearch instance ID.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_reserved_elasticsearch_instances"
    values={[
        { label: 'describe_reserved_elasticsearch_instances', value: 'describe_reserved_elasticsearch_instances' }
    ]}
>
<TabItem value="describe_reserved_elasticsearch_instances">

Returns information about reserved Elasticsearch instances for this account.

```sql
SELECT
CurrencyCode,
Duration,
ElasticsearchInstanceCount,
ElasticsearchInstanceType,
FixedPrice,
PaymentOption,
RecurringCharges,
ReservationName,
ReservedElasticsearchInstanceId,
ReservedElasticsearchInstanceOfferingId,
StartTime,
State,
UsagePrice
FROM aws.es.reserved_elasticsearch_instances
WHERE region = '{{ region }}' -- required
AND reservationId = '{{ reservationId }}'
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>
