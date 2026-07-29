--- 
title: event_selectors
hide_title: false
hide_table_of_contents: false
keywords:
  - event_selectors
  - cloudtrail
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

Creates, updates, deletes, gets or lists an <code>event_selectors</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="event_selectors" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cloudtrail.event_selectors" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_event_selectors"
    values={[
        { label: 'get_event_selectors', value: 'get_event_selectors' }
    ]}
>
<TabItem value="get_event_selectors">

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
    <td><CopyableCode code="advanced_event_selectors" /></td>
    <td><code>array</code></td>
    <td>The advanced event selectors that are configured for the trail.</td>
</tr>
<tr>
    <td><CopyableCode code="event_selectors" /></td>
    <td><code>array</code></td>
    <td>The event selectors that are configured for the trail.</td>
</tr>
<tr>
    <td><CopyableCode code="trail_arn" /></td>
    <td><code>string</code></td>
    <td>The specified trail ARN that has the event selectors.</td>
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
    <td><a href="#get_event_selectors"><CopyableCode code="get_event_selectors" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes the settings for the event selectors that you configured for your trail. The information returned for your event selectors includes the following: If your event selector includes read-only events, write-only events, or all events. This applies to management events, data events, and network activity events. If your event selector includes management events. If your event selector includes network activity events, the event sources for which you are logging network activity events. If your event selector includes data events, the resources on which you are logging data events. For more information about logging management, data, and network activity events, see the following topics in the CloudTrail User Guide: Logging management events Logging data events Logging network activity events</td>
</tr>
<tr>
    <td><a href="#put_event_selectors"><CopyableCode code="put_event_selectors" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-TrailName"><code>TrailName</code></a></td>
    <td></td>
    <td>Configures event selectors (also referred to as basic event selectors) or advanced event selectors for your trail. You can use either AdvancedEventSelectors or EventSelectors, but not both. If you apply AdvancedEventSelectors to a trail, any existing EventSelectors are overwritten. You can use AdvancedEventSelectors to log management events, data events for all resource types, and network activity events. You can use EventSelectors to log management events and data events for the following resource types: AWS::DynamoDB::Table AWS::Lambda::Function AWS::S3::Object You can't use EventSelectors to log network activity events. If you want your trail to log Insights events, be sure the event selector or advanced event selector enables logging of the Insights event types you want configured for your trail. For more information about logging Insights events, see Working with CloudTrail Insights in the CloudTrail User Guide. By default, trails created without specific event selectors are configured to log all read and write management events, and no data events or network activity events. When an event occurs in your account, CloudTrail evaluates the event selectors or advanced event selectors in all trails. For each trail, if the event matches any event selector, the trail processes and logs the event. If the event doesn't match any event selector, the trail doesn't log the event. Example You create an event selector for a trail and specify that you want to log write-only events. The EC2 GetConsoleOutput and RunInstances API operations occur in your account. CloudTrail evaluates whether the events match your event selectors. The RunInstances is a write-only event and it matches your event selector. The trail logs the event. The GetConsoleOutput is a read-only event that doesn't match your event selector. The trail doesn't log the event. The PutEventSelectors operation must be called from the Region in which the trail was created; otherwise, an InvalidHomeRegionException exception is thrown. You can configure up to five event selectors for each trail. You can add advanced event selectors, and conditions for your advanced event selectors, up to a maximum of 500 values for all conditions and selectors on a trail. For more information, see Logging management events, Logging data events, Logging network activity events, and Quotas in CloudTrail in the CloudTrail User Guide.</td>
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
    defaultValue="get_event_selectors"
    values={[
        { label: 'get_event_selectors', value: 'get_event_selectors' }
    ]}
>
<TabItem value="get_event_selectors">

Describes the settings for the event selectors that you configured for your trail. The information returned for your event selectors includes the following: If your event selector includes read-only events, write-only events, or all events. This applies to management events, data events, and network activity events. If your event selector includes management events. If your event selector includes network activity events, the event sources for which you are logging network activity events. If your event selector includes data events, the resources on which you are logging data events. For more information about logging management, data, and network activity events, see the following topics in the CloudTrail User Guide: Logging management events Logging data events Logging network activity events

```sql
SELECT
advanced_event_selectors,
event_selectors,
trail_arn
FROM aws.cloudtrail.event_selectors
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_event_selectors"
    values={[
        { label: 'put_event_selectors', value: 'put_event_selectors' }
    ]}
>
<TabItem value="put_event_selectors">

Configures event selectors (also referred to as basic event selectors) or advanced event selectors for your trail. You can use either AdvancedEventSelectors or EventSelectors, but not both. If you apply AdvancedEventSelectors to a trail, any existing EventSelectors are overwritten. You can use AdvancedEventSelectors to log management events, data events for all resource types, and network activity events. You can use EventSelectors to log management events and data events for the following resource types: AWS::DynamoDB::Table AWS::Lambda::Function AWS::S3::Object You can't use EventSelectors to log network activity events. If you want your trail to log Insights events, be sure the event selector or advanced event selector enables logging of the Insights event types you want configured for your trail. For more information about logging Insights events, see Working with CloudTrail Insights in the CloudTrail User Guide. By default, trails created without specific event selectors are configured to log all read and write management events, and no data events or network activity events. When an event occurs in your account, CloudTrail evaluates the event selectors or advanced event selectors in all trails. For each trail, if the event matches any event selector, the trail processes and logs the event. If the event doesn't match any event selector, the trail doesn't log the event. Example You create an event selector for a trail and specify that you want to log write-only events. The EC2 GetConsoleOutput and RunInstances API operations occur in your account. CloudTrail evaluates whether the events match your event selectors. The RunInstances is a write-only event and it matches your event selector. The trail logs the event. The GetConsoleOutput is a read-only event that doesn't match your event selector. The trail doesn't log the event. The PutEventSelectors operation must be called from the Region in which the trail was created; otherwise, an InvalidHomeRegionException exception is thrown. You can configure up to five event selectors for each trail. You can add advanced event selectors, and conditions for your advanced event selectors, up to a maximum of 500 values for all conditions and selectors on a trail. For more information, see Logging management events, Logging data events, Logging network activity events, and Quotas in CloudTrail in the CloudTrail User Guide.

```sql
REPLACE aws.cloudtrail.event_selectors
SET 
TrailName = '{{ TrailName }}',
EventSelectors = '{{ EventSelectors }}',
AdvancedEventSelectors = '{{ AdvancedEventSelectors }}'
WHERE 
region = '{{ region }}' --required
AND TrailName = '{{ TrailName }}' --required
RETURNING
advanced_event_selectors,
event_selectors,
trail_arn;
```
</TabItem>
</Tabs>
