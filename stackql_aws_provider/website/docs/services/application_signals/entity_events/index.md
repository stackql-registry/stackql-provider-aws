--- 
title: entity_events
hide_title: false
hide_table_of_contents: false
keywords:
  - entity_events
  - application_signals
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

Creates, updates, deletes, gets or lists an <code>entity_events</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="entity_events" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.application_signals.entity_events" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_entity_events"
    values={[
        { label: 'list_entity_events', value: 'list_entity_events' }
    ]}
>
<TabItem value="list_entity_events">

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
    <td><CopyableCode code="AccountId" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account ID where this change event occurred. (pattern: &lt;code&gt;&#91;0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ChangeEventType" /></td>
    <td><code>string</code></td>
    <td>The type of change event that occurred, such as DEPLOYMENT. (DEPLOYMENT, CONFIGURATION)</td>
</tr>
<tr>
    <td><CopyableCode code="Entity" /></td>
    <td><code>object</code></td>
    <td>The entity (service or resource) that was affected by this change event, including its key attributes. This is a string-to-string map. It can include the following fields. Type designates the type of object this is. ResourceType specifies the type of the resource. This field is used only when the value of the Type field is Resource or AWS::Resource. Name specifies the name of the object. This is used only if the value of the Type field is Service, RemoteService, or AWS::Service. Identifier identifies the resource objects of this resource. This is used only if the value of the Type field is Resource or AWS::Resource. Environment specifies the location where this object is hosted, or what it belongs to. AwsAccountId specifies the account where this object is in. Below is an example of a service. &#123; "Type": "Service", "Name": "visits-service", "Environment": "petclinic-test" &#125; Below is an example of a resource. &#123; "Type": "AWS::Resource", "ResourceType": "AWS::DynamoDB::Table", "Identifier": "Customers" &#125;</td>
</tr>
<tr>
    <td><CopyableCode code="EventId" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for this change event. For CloudTrail-based events, this is the CloudTrail event id. For other events, this will be Unknown.</td>
</tr>
<tr>
    <td><CopyableCode code="EventName" /></td>
    <td><code>string</code></td>
    <td>The name or description of this change event.</td>
</tr>
<tr>
    <td><CopyableCode code="Region" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services region where this change event occurred.</td>
</tr>
<tr>
    <td><CopyableCode code="Timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when this change event occurred. When used in a raw HTTP Query API, it is formatted as epoch time in seconds.</td>
</tr>
<tr>
    <td><CopyableCode code="UserName" /></td>
    <td><code>string</code></td>
    <td>The name of the user who initiated this change event, if available.</td>
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
    <td><a href="#list_entity_events"><CopyableCode code="list_entity_events" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a></td>
    <td>Returns a list of change events for a specific entity, such as deployments, configuration changes, or other state-changing activities. This operation helps track the history of changes that may have affected service performance.</td>
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
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of change events to return in one operation. If you omit this parameter, the default of 50 is used.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>Include this value, if it was returned by the previous operation, to get the next set of change events.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_entity_events"
    values={[
        { label: 'list_entity_events', value: 'list_entity_events' }
    ]}
>
<TabItem value="list_entity_events">

Returns a list of change events for a specific entity, such as deployments, configuration changes, or other state-changing activities. This operation helps track the history of changes that may have affected service performance.

```sql
SELECT
AccountId,
ChangeEventType,
Entity,
EventId,
EventName,
Region,
Timestamp,
UserName
FROM aws.application_signals.entity_events
WHERE region = '{{ region }}' -- required
AND MaxResults = '{{ MaxResults }}'
AND NextToken = '{{ NextToken }}'
;
```
</TabItem>
</Tabs>
