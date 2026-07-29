--- 
title: event_topics
hide_title: false
hide_table_of_contents: false
keywords:
  - event_topics
  - ds
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

Creates, updates, deletes, gets or lists an <code>event_topics</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="event_topics" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ds.event_topics" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_event_topics"
    values={[
        { label: 'describe_event_topics', value: 'describe_event_topics' }
    ]}
>
<TabItem value="describe_event_topics">

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
    <td><CopyableCode code="event_topics" /></td>
    <td><code>array</code></td>
    <td>A list of Amazon SNS topic names that receive status messages from the specified Directory ID.</td>
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
    <td><a href="#describe_event_topics"><CopyableCode code="describe_event_topics" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Obtains information about which Amazon SNS topics receive status messages from the specified directory. If no input parameters are provided, such as DirectoryId or TopicName, this request describes all of the associations in the account.</td>
</tr>
<tr>
    <td><a href="#register_event_topic"><CopyableCode code="register_event_topic" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DirectoryId"><code>DirectoryId</code></a>, <a href="#parameter-TopicName"><code>TopicName</code></a></td>
    <td></td>
    <td>Associates a directory with an Amazon SNS topic. This establishes the directory as a publisher to the specified Amazon SNS topic. You can then receive email or text (SMS) messages when the status of your directory changes. You get notified if your directory goes from an Active status to an Impaired or Inoperable status. You also receive a notification when the directory returns to an Active status.</td>
</tr>
<tr>
    <td><a href="#deregister_event_topic"><CopyableCode code="deregister_event_topic" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Removes the specified directory as a publisher to the specified Amazon SNS topic.</td>
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
    defaultValue="describe_event_topics"
    values={[
        { label: 'describe_event_topics', value: 'describe_event_topics' }
    ]}
>
<TabItem value="describe_event_topics">

Obtains information about which Amazon SNS topics receive status messages from the specified directory. If no input parameters are provided, such as DirectoryId or TopicName, this request describes all of the associations in the account.

```sql
SELECT
event_topics
FROM aws.ds.event_topics
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="register_event_topic"
    values={[
        { label: 'register_event_topic', value: 'register_event_topic' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="register_event_topic">

Associates a directory with an Amazon SNS topic. This establishes the directory as a publisher to the specified Amazon SNS topic. You can then receive email or text (SMS) messages when the status of your directory changes. You get notified if your directory goes from an Active status to an Impaired or Inoperable status. You also receive a notification when the directory returns to an Active status.

```sql
INSERT INTO aws.ds.event_topics (
DirectoryId,
TopicName,
region
)
SELECT 
'{{ DirectoryId }}' /* required */,
'{{ TopicName }}' /* required */,
'{{ region }}'
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: event_topics
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the event_topics resource.
    - name: DirectoryId
      value: "{{ DirectoryId }}"
      description: |
        The Directory ID that will publish status messages to the Amazon SNS topic.
    - name: TopicName
      value: "{{ TopicName }}"
      description: |
        The Amazon SNS topic name to which the directory will publish status messages. This Amazon SNS topic must be in the same region as the specified Directory ID.
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="deregister_event_topic"
    values={[
        { label: 'deregister_event_topic', value: 'deregister_event_topic' }
    ]}
>
<TabItem value="deregister_event_topic">

Removes the specified directory as a publisher to the specified Amazon SNS topic.

```sql
DELETE FROM aws.ds.event_topics
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
