--- 
title: event_subscriptions
hide_title: false
hide_table_of_contents: false
keywords:
  - event_subscriptions
  - dms
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

Creates, updates, deletes, gets or lists an <code>event_subscriptions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="event_subscriptions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.dms.event_subscriptions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_event_subscriptions"
    values={[
        { label: 'describe_event_subscriptions', value: 'describe_event_subscriptions' }
    ]}
>
<TabItem value="describe_event_subscriptions">

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
    <td><CopyableCode code="CustSubscriptionId" /></td>
    <td><code>string</code></td>
    <td>The DMS event notification subscription Id.</td>
</tr>
<tr>
    <td><CopyableCode code="CustomerAwsId" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services customer account associated with the DMS event notification subscription.</td>
</tr>
<tr>
    <td><CopyableCode code="Enabled" /></td>
    <td><code>boolean</code></td>
    <td>Boolean value that indicates if the event subscription is enabled.</td>
</tr>
<tr>
    <td><CopyableCode code="EventCategoriesList" /></td>
    <td><code>array</code></td>
    <td>A lists of event categories.</td>
</tr>
<tr>
    <td><CopyableCode code="SnsTopicArn" /></td>
    <td><code>string</code></td>
    <td>The topic ARN of the DMS event notification subscription.</td>
</tr>
<tr>
    <td><CopyableCode code="SourceIdsList" /></td>
    <td><code>array</code></td>
    <td>A list of source Ids for the event subscription.</td>
</tr>
<tr>
    <td><CopyableCode code="SourceType" /></td>
    <td><code>string</code></td>
    <td>The type of DMS resource that generates events. Valid values: replication-instance | replication-server | security-group | replication-task</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The status of the DMS event notification subscription. Constraints: Can be one of the following: creating | modifying | deleting | active | no-permission | topic-not-exist The status "no-permission" indicates that DMS no longer has permission to post to the SNS topic. The status "topic-not-exist" indicates that the topic was deleted after the subscription was created.</td>
</tr>
<tr>
    <td><CopyableCode code="SubscriptionCreationTime" /></td>
    <td><code>string</code></td>
    <td>The time the DMS event notification subscription was created.</td>
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
    <td><a href="#describe_event_subscriptions"><CopyableCode code="describe_event_subscriptions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists all the event subscriptions for a customer account. The description of a subscription includes SubscriptionName, SNSTopicARN, CustomerID, SourceType, SourceID, CreationTime, and Status. If you specify SubscriptionName, this action lists the description for that subscription.</td>
</tr>
<tr>
    <td><a href="#create_event_subscription"><CopyableCode code="create_event_subscription" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-SubscriptionName"><code>SubscriptionName</code></a>, <a href="#parameter-SnsTopicArn"><code>SnsTopicArn</code></a></td>
    <td></td>
    <td>Creates an DMS event notification subscription. You can specify the type of source (SourceType) you want to be notified of, provide a list of DMS source IDs (SourceIds) that triggers the events, and provide a list of event categories (EventCategories) for events you want to be notified of. If you specify both the SourceType and SourceIds, such as SourceType = replication-instance and SourceIdentifier = my-replinstance, you will be notified of all the replication instance events for the specified source. If you specify a SourceType but don't specify a SourceIdentifier, you receive notice of the events for that source type for all your DMS sources. If you don't specify either SourceType nor SourceIdentifier, you will be notified of events generated from all DMS sources belonging to your customer account. For more information about DMS events, see Working with Events and Notifications in the Database Migration Service User Guide.</td>
</tr>
<tr>
    <td><a href="#modify_event_subscription"><CopyableCode code="modify_event_subscription" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-SubscriptionName"><code>SubscriptionName</code></a></td>
    <td></td>
    <td>Modifies an existing DMS event notification subscription.</td>
</tr>
<tr>
    <td><a href="#delete_event_subscription"><CopyableCode code="delete_event_subscription" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an DMS event subscription.</td>
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
    defaultValue="describe_event_subscriptions"
    values={[
        { label: 'describe_event_subscriptions', value: 'describe_event_subscriptions' }
    ]}
>
<TabItem value="describe_event_subscriptions">

Lists all the event subscriptions for a customer account. The description of a subscription includes SubscriptionName, SNSTopicARN, CustomerID, SourceType, SourceID, CreationTime, and Status. If you specify SubscriptionName, this action lists the description for that subscription.

```sql
SELECT
CustSubscriptionId,
CustomerAwsId,
Enabled,
EventCategoriesList,
SnsTopicArn,
SourceIdsList,
SourceType,
Status,
SubscriptionCreationTime
FROM aws.dms.event_subscriptions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_event_subscription"
    values={[
        { label: 'create_event_subscription', value: 'create_event_subscription' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_event_subscription">

Creates an DMS event notification subscription. You can specify the type of source (SourceType) you want to be notified of, provide a list of DMS source IDs (SourceIds) that triggers the events, and provide a list of event categories (EventCategories) for events you want to be notified of. If you specify both the SourceType and SourceIds, such as SourceType = replication-instance and SourceIdentifier = my-replinstance, you will be notified of all the replication instance events for the specified source. If you specify a SourceType but don't specify a SourceIdentifier, you receive notice of the events for that source type for all your DMS sources. If you don't specify either SourceType nor SourceIdentifier, you will be notified of events generated from all DMS sources belonging to your customer account. For more information about DMS events, see Working with Events and Notifications in the Database Migration Service User Guide.

```sql
INSERT INTO aws.dms.event_subscriptions (
SubscriptionName,
SnsTopicArn,
SourceType,
EventCategories,
SourceIds,
Enabled,
Tags,
region
)
SELECT 
'{{ SubscriptionName }}' /* required */,
'{{ SnsTopicArn }}' /* required */,
'{{ SourceType }}',
'{{ EventCategories }}',
'{{ SourceIds }}',
{{ Enabled }},
'{{ Tags }}',
'{{ region }}'
RETURNING
EventSubscription
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: event_subscriptions
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the event_subscriptions resource.
    - name: SubscriptionName
      value: "{{ SubscriptionName }}"
      description: |
        The name of the DMS event notification subscription. This name must be less than 255 characters.
    - name: SnsTopicArn
      value: "{{ SnsTopicArn }}"
      description: |
        The Amazon Resource Name (ARN) of the Amazon SNS topic created for event notification. The ARN is created by Amazon SNS when you create a topic and subscribe to it.
    - name: SourceType
      value: "{{ SourceType }}"
      description: |
        The type of DMS resource that generates the events. For example, if you want to be notified of events generated by a replication instance, you set this parameter to replication-instance. If this value isn't specified, all events are returned. Valid values: replication-instance | replication-task
    - name: EventCategories
      value:
        - "{{ EventCategories }}"
      description: |
        A list of event categories for a source type that you want to subscribe to. For more information, see Working with Events and Notifications in the Database Migration Service User Guide.
    - name: SourceIds
      value:
        - "{{ SourceIds }}"
      description: |
        A list of identifiers for which DMS provides notification events. If you don't specify a value, notifications are provided for all sources. If you specify multiple values, they must be of the same type. For example, if you specify a database instance ID, then all of the other values must be database instance IDs.
    - name: Enabled
      value: {{ Enabled }}
      description: |
        A Boolean value; set to true to activate the subscription, or set to false to create the subscription but not activate it.
    - name: Tags
      description: |
        One or more tags to be assigned to the event subscription.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
          ResourceArn: "{{ ResourceArn }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="modify_event_subscription"
    values={[
        { label: 'modify_event_subscription', value: 'modify_event_subscription' }
    ]}
>
<TabItem value="modify_event_subscription">

Modifies an existing DMS event notification subscription.

```sql
UPDATE aws.dms.event_subscriptions
SET 
SubscriptionName = '{{ SubscriptionName }}',
SnsTopicArn = '{{ SnsTopicArn }}',
SourceType = '{{ SourceType }}',
EventCategories = '{{ EventCategories }}',
Enabled = {{ Enabled }}
WHERE 
region = '{{ region }}' --required
AND SubscriptionName = '{{ SubscriptionName }}' --required
RETURNING
EventSubscription;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_event_subscription"
    values={[
        { label: 'delete_event_subscription', value: 'delete_event_subscription' }
    ]}
>
<TabItem value="delete_event_subscription">

Deletes an DMS event subscription.

```sql
DELETE FROM aws.dms.event_subscriptions
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
