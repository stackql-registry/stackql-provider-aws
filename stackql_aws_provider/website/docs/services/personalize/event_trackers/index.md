--- 
title: event_trackers
hide_title: false
hide_table_of_contents: false
keywords:
  - event_trackers
  - personalize
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

Creates, updates, deletes, gets or lists an <code>event_trackers</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="event_trackers" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.personalize.event_trackers" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_event_tracker"
    values={[
        { label: 'describe_event_tracker', value: 'describe_event_tracker' },
        { label: 'list_event_trackers', value: 'list_event_trackers' }
    ]}
>
<TabItem value="describe_event_tracker">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the event tracker. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9&#93;&#91;a-zA-Z0-9\-_&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="account_id" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account that owns the event tracker.</td>
</tr>
<tr>
    <td><CopyableCode code="creation_date_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time (in Unix format) that the event tracker was created.</td>
</tr>
<tr>
    <td><CopyableCode code="dataset_group_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the dataset group that receives the event data. (pattern: &lt;code&gt;arn:(&#91;a-z\d-&#93;+):personalize:.*:.*:.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="event_tracker_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the event tracker. (pattern: &lt;code&gt;arn:(&#91;a-z\d-&#93;+):personalize:.*:.*:.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated_date_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time (in Unix time) that the event tracker was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the event tracker. An event tracker can be in one of the following states: CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED DELETE PENDING &gt; DELETE IN_PROGRESS</td>
</tr>
<tr>
    <td><CopyableCode code="tracking_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the event tracker. Include this ID in requests to the PutEvents API.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_event_trackers">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the event tracker. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9&#93;&#91;a-zA-Z0-9\-_&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="creation_date_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time (in Unix time) that the event tracker was created.</td>
</tr>
<tr>
    <td><CopyableCode code="event_tracker_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the event tracker. (pattern: &lt;code&gt;arn:(&#91;a-z\d-&#93;+):personalize:.*:.*:.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated_date_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time (in Unix time) that the event tracker was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the event tracker. An event tracker can be in one of the following states: CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED DELETE PENDING &gt; DELETE IN_PROGRESS</td>
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
    <td><a href="#describe_event_tracker"><CopyableCode code="describe_event_tracker" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes an event tracker. The response includes the trackingId and status of the event tracker. For more information on event trackers, see CreateEventTracker.</td>
</tr>
<tr>
    <td><a href="#list_event_trackers"><CopyableCode code="list_event_trackers" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the list of event trackers associated with the account. The response provides the properties for each event tracker, including the Amazon Resource Name (ARN) and tracking ID. For more information on event trackers, see CreateEventTracker.</td>
</tr>
<tr>
    <td><a href="#create_event_tracker"><CopyableCode code="create_event_tracker" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-datasetGroupArn"><code>datasetGroupArn</code></a></td>
    <td></td>
    <td>Creates an event tracker that you use when adding event data to a specified dataset group using the PutEvents API. Only one event tracker can be associated with a dataset group. You will get an error if you call CreateEventTracker using the same dataset group as an existing event tracker. When you create an event tracker, the response includes a tracking ID, which you pass as a parameter when you use the PutEvents operation. Amazon Personalize then appends the event data to the Item interactions dataset of the dataset group you specify in your event tracker. The event tracker can be in one of the following states: CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED DELETE PENDING &gt; DELETE IN_PROGRESS To get the status of the event tracker, call DescribeEventTracker. The event tracker must be in the ACTIVE state before using the tracking ID. Related APIs ListEventTrackers DescribeEventTracker DeleteEventTracker</td>
</tr>
<tr>
    <td><a href="#delete_event_tracker"><CopyableCode code="delete_event_tracker" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the event tracker. Does not delete the dataset from the dataset group. For more information on event trackers, see CreateEventTracker.</td>
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
    defaultValue="describe_event_tracker"
    values={[
        { label: 'describe_event_tracker', value: 'describe_event_tracker' },
        { label: 'list_event_trackers', value: 'list_event_trackers' }
    ]}
>
<TabItem value="describe_event_tracker">

Describes an event tracker. The response includes the trackingId and status of the event tracker. For more information on event trackers, see CreateEventTracker.

```sql
SELECT
name,
account_id,
creation_date_time,
dataset_group_arn,
event_tracker_arn,
last_updated_date_time,
status,
tracking_id
FROM aws.personalize.event_trackers
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_event_trackers">

Returns the list of event trackers associated with the account. The response provides the properties for each event tracker, including the Amazon Resource Name (ARN) and tracking ID. For more information on event trackers, see CreateEventTracker.

```sql
SELECT
name,
creation_date_time,
event_tracker_arn,
last_updated_date_time,
status
FROM aws.personalize.event_trackers
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_event_tracker"
    values={[
        { label: 'create_event_tracker', value: 'create_event_tracker' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_event_tracker">

Creates an event tracker that you use when adding event data to a specified dataset group using the PutEvents API. Only one event tracker can be associated with a dataset group. You will get an error if you call CreateEventTracker using the same dataset group as an existing event tracker. When you create an event tracker, the response includes a tracking ID, which you pass as a parameter when you use the PutEvents operation. Amazon Personalize then appends the event data to the Item interactions dataset of the dataset group you specify in your event tracker. The event tracker can be in one of the following states: CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED DELETE PENDING &gt; DELETE IN_PROGRESS To get the status of the event tracker, call DescribeEventTracker. The event tracker must be in the ACTIVE state before using the tracking ID. Related APIs ListEventTrackers DescribeEventTracker DeleteEventTracker

```sql
INSERT INTO aws.personalize.event_trackers (
name,
datasetGroupArn,
tags,
region
)
SELECT 
'{{ name }}' /* required */,
'{{ datasetGroupArn }}' /* required */,
'{{ tags }}',
'{{ region }}'
RETURNING
event_tracker_arn,
tracking_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: event_trackers
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the event_trackers resource.
    - name: name
      value: "{{ name }}"
      description: |
        The name for the event tracker.
    - name: datasetGroupArn
      value: "{{ datasetGroupArn }}"
      description: |
        The Amazon Resource Name (ARN) of the dataset group that receives the event data.
    - name: tags
      description: |
        A list of tags to apply to the event tracker.
      value:
        - tagKey: "{{ tagKey }}"
          tagValue: "{{ tagValue }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_event_tracker"
    values={[
        { label: 'delete_event_tracker', value: 'delete_event_tracker' }
    ]}
>
<TabItem value="delete_event_tracker">

Deletes the event tracker. Does not delete the dataset from the dataset group. For more information on event trackers, see CreateEventTracker.

```sql
DELETE FROM aws.personalize.event_trackers
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
