--- 
title: monitoring_subscriptions
hide_title: false
hide_table_of_contents: false
keywords:
  - monitoring_subscriptions
  - cloudfront
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

Creates, updates, deletes, gets or lists a <code>monitoring_subscriptions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="monitoring_subscriptions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cloudfront.monitoring_subscriptions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_monitoring_subscription"
    values={[
        { label: 'get_monitoring_subscription', value: 'get_monitoring_subscription' }
    ]}
>
<TabItem value="get_monitoring_subscription">

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
    <td><CopyableCode code="RealtimeMetricsSubscriptionConfig" /></td>
    <td><code>string</code></td>
    <td>A subscription configuration for additional CloudWatch metrics.</td>
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
    <td><a href="#get_monitoring_subscription"><CopyableCode code="get_monitoring_subscription" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-distribution_id"><code>distribution_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about whether additional CloudWatch metrics are enabled for the specified CloudFront distribution.</td>
</tr>
<tr>
    <td><a href="#create_monitoring_subscription"><CopyableCode code="create_monitoring_subscription" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-distribution_id"><code>distribution_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-MonitoringSubscription"><code>MonitoringSubscription</code></a></td>
    <td></td>
    <td>Enables or disables additional Amazon CloudWatch metrics for the specified CloudFront distribution. The additional metrics incur an additional cost. For more information, see Viewing additional CloudFront distribution metrics in the Amazon CloudFront Developer Guide.</td>
</tr>
<tr>
    <td><a href="#delete_monitoring_subscription"><CopyableCode code="delete_monitoring_subscription" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-distribution_id"><code>distribution_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Disables additional CloudWatch metrics for the specified CloudFront distribution.</td>
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
<tr id="parameter-distribution_id">
    <td><CopyableCode code="distribution_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the distribution that you are disabling metrics for.</td>
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
    defaultValue="get_monitoring_subscription"
    values={[
        { label: 'get_monitoring_subscription', value: 'get_monitoring_subscription' }
    ]}
>
<TabItem value="get_monitoring_subscription">

Gets information about whether additional CloudWatch metrics are enabled for the specified CloudFront distribution.

```sql
SELECT
RealtimeMetricsSubscriptionConfig
FROM aws.cloudfront.monitoring_subscriptions
WHERE distribution_id = '{{ distribution_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_monitoring_subscription"
    values={[
        { label: 'create_monitoring_subscription', value: 'create_monitoring_subscription' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_monitoring_subscription">

Enables or disables additional Amazon CloudWatch metrics for the specified CloudFront distribution. The additional metrics incur an additional cost. For more information, see Viewing additional CloudFront distribution metrics in the Amazon CloudFront Developer Guide.

```sql
INSERT INTO aws.cloudfront.monitoring_subscriptions (
MonitoringSubscription,
distribution_id,
region
)
SELECT 
'{{ MonitoringSubscription }}' /* required */,
'{{ distribution_id }}',
'{{ region }}'
RETURNING
RealtimeMetricsSubscriptionConfig
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: monitoring_subscriptions
  props:
    - name: distribution_id
      value: "{{ distribution_id }}"
      description: Required parameter for the monitoring_subscriptions resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the monitoring_subscriptions resource.
    - name: MonitoringSubscription
      description: |
        A monitoring subscription. This structure contains information about whether additional CloudWatch metrics are enabled for a given CloudFront distribution.
      value:
        RealtimeMetricsSubscriptionConfig:
          RealtimeMetricsSubscriptionStatus: "{{ RealtimeMetricsSubscriptionStatus }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_monitoring_subscription"
    values={[
        { label: 'delete_monitoring_subscription', value: 'delete_monitoring_subscription' }
    ]}
>
<TabItem value="delete_monitoring_subscription">

Disables additional CloudWatch metrics for the specified CloudFront distribution.

```sql
DELETE FROM aws.cloudfront.monitoring_subscriptions
WHERE distribution_id = '{{ distribution_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
