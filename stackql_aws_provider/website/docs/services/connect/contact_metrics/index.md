--- 
title: contact_metrics
hide_title: false
hide_table_of_contents: false
keywords:
  - contact_metrics
  - connect
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

Creates, updates, deletes, gets or lists a <code>contact_metrics</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="contact_metrics" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.connect.contact_metrics" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_contact_metrics"
    values={[
        { label: 'get_contact_metrics', value: 'get_contact_metrics' }
    ]}
>
<TabItem value="get_contact_metrics">

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
    <td><CopyableCode code="Arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the contact for which metrics were retrieved.</td>
</tr>
<tr>
    <td><CopyableCode code="Id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the contact for which metrics were retrieved. This matches the ContactId provided in the request.</td>
</tr>
<tr>
    <td><CopyableCode code="MetricResults" /></td>
    <td><code>array</code></td>
    <td>A list of metric results containing the calculated values for each requested metric. Each result includes the metric name and its corresponding value. For example, POSITION_IN_QUEUE returns a numeric value representing the contact's position in queue, and ESTIMATED_WAIT_TIME returns the predicted wait time in seconds.</td>
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
    <td><a href="#get_contact_metrics"><CopyableCode code="get_contact_metrics" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves contact metric data for a specified contact. Use cases Following are common use cases for position in queue and estimated wait time: Customer-Facing Wait Time Announcements - Display or announce the estimated wait time and position in queue to customers before or during their queue experience. Callback Offerings - Offer customers a callback option when the estimated wait time or position in queue exceeds a defined threshold. Queue Routing Decisions - Route incoming contacts to less congested queues by comparing estimated wait time and position in queue across multiple queues. Self-Service Deflection - Redirect customers to self-service options like chatbots or FAQs when estimated wait time is high or position in queue is unfavorable. Important things to know Metrics are only available while the contact is actively in queue. For more information, see the Position in queue metric in the Amazon Connect Administrator Guide. Endpoints: See Amazon Connect endpoints and quotas.</td>
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
    defaultValue="get_contact_metrics"
    values={[
        { label: 'get_contact_metrics', value: 'get_contact_metrics' }
    ]}
>
<TabItem value="get_contact_metrics">

Retrieves contact metric data for a specified contact. Use cases Following are common use cases for position in queue and estimated wait time: Customer-Facing Wait Time Announcements - Display or announce the estimated wait time and position in queue to customers before or during their queue experience. Callback Offerings - Offer customers a callback option when the estimated wait time or position in queue exceeds a defined threshold. Queue Routing Decisions - Route incoming contacts to less congested queues by comparing estimated wait time and position in queue across multiple queues. Self-Service Deflection - Redirect customers to self-service options like chatbots or FAQs when estimated wait time is high or position in queue is unfavorable. Important things to know Metrics are only available while the contact is actively in queue. For more information, see the Position in queue metric in the Amazon Connect Administrator Guide. Endpoints: See Amazon Connect endpoints and quotas.

```sql
SELECT
Arn,
Id,
MetricResults
FROM aws.connect.contact_metrics
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
