--- 
title: partner_event_sources
hide_title: false
hide_table_of_contents: false
keywords:
  - partner_event_sources
  - events
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

Creates, updates, deletes, gets or lists a <code>partner_event_sources</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="partner_event_sources" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.events.partner_event_sources" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_partner_event_sources"
    values={[
        { label: 'list_partner_event_sources', value: 'list_partner_event_sources' },
        { label: 'describe_partner_event_source', value: 'describe_partner_event_source' }
    ]}
>
<TabItem value="list_partner_event_sources">

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
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>A token indicating there are more results available. If there are no more results, no token is included in the response. The value of nextToken is a unique pagination token for each page. To retrieve the next page of results, make the call again using the returned token. Keep all other arguments unchanged. Using an expired pagination token results in an HTTP 400 InvalidToken error.</td>
</tr>
<tr>
    <td><CopyableCode code="PartnerEventSources" /></td>
    <td><code>array</code></td>
    <td>The list of partner event sources returned by the operation.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="describe_partner_event_source">

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
    <td>The ARN of the event source.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of the event source.</td>
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
    <td><a href="#list_partner_event_sources"><CopyableCode code="list_partner_event_sources" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>An SaaS partner can use this operation to list all the partner event source names that they have created. This operation is not used by Amazon Web Services customers.</td>
</tr>
<tr>
    <td><a href="#describe_partner_event_source"><CopyableCode code="describe_partner_event_source" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>An SaaS partner can use this operation to list details about a partner event source that they have created. Amazon Web Services customers do not use this operation. Instead, Amazon Web Services customers can use DescribeEventSource to see details about a partner event source that is shared with them.</td>
</tr>
<tr>
    <td><a href="#create_partner_event_source"><CopyableCode code="create_partner_event_source" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Account"><code>Account</code></a></td>
    <td></td>
    <td>Called by an SaaS partner to create a partner event source. This operation is not used by Amazon Web Services customers. Each partner event source can be used by one Amazon Web Services account to create a matching partner event bus in that Amazon Web Services account. A SaaS partner must create one partner event source for each Amazon Web Services account that wants to receive those event types. A partner event source creates events based on resources within the SaaS partner's service or application. An Amazon Web Services account that creates a partner event bus that matches the partner event source can use that event bus to receive events from the partner, and then process them using Amazon Web Services Events rules and targets. Partner event source names follow this format: partner_name/event_namespace/event_name partner_name is determined during partner registration, and identifies the partner to Amazon Web Services customers. event_namespace is determined by the partner, and is a way for the partner to categorize their events. event_name is determined by the partner, and should uniquely identify an event-generating resource within the partner system. The event_name must be unique across all Amazon Web Services customers. This is because the event source is a shared resource between the partner and customer accounts, and each partner event source unique in the partner account. The combination of event_namespace and event_name should help Amazon Web Services customers decide whether to create an event bus to receive these events.</td>
</tr>
<tr>
    <td><a href="#delete_partner_event_source"><CopyableCode code="delete_partner_event_source" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This operation is used by SaaS partners to delete a partner event source. This operation is not used by Amazon Web Services customers. When you delete an event source, the status of the corresponding partner event bus in the Amazon Web Services customer account becomes DELETED.</td>
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
    defaultValue="list_partner_event_sources"
    values={[
        { label: 'list_partner_event_sources', value: 'list_partner_event_sources' },
        { label: 'describe_partner_event_source', value: 'describe_partner_event_source' }
    ]}
>
<TabItem value="list_partner_event_sources">

An SaaS partner can use this operation to list all the partner event source names that they have created. This operation is not used by Amazon Web Services customers.

```sql
SELECT
NextToken,
PartnerEventSources
FROM aws.events.partner_event_sources
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="describe_partner_event_source">

An SaaS partner can use this operation to list details about a partner event source that they have created. Amazon Web Services customers do not use this operation. Instead, Amazon Web Services customers can use DescribeEventSource to see details about a partner event source that is shared with them.

```sql
SELECT
Arn,
Name
FROM aws.events.partner_event_sources
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_partner_event_source"
    values={[
        { label: 'create_partner_event_source', value: 'create_partner_event_source' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_partner_event_source">

Called by an SaaS partner to create a partner event source. This operation is not used by Amazon Web Services customers. Each partner event source can be used by one Amazon Web Services account to create a matching partner event bus in that Amazon Web Services account. A SaaS partner must create one partner event source for each Amazon Web Services account that wants to receive those event types. A partner event source creates events based on resources within the SaaS partner's service or application. An Amazon Web Services account that creates a partner event bus that matches the partner event source can use that event bus to receive events from the partner, and then process them using Amazon Web Services Events rules and targets. Partner event source names follow this format: partner_name/event_namespace/event_name partner_name is determined during partner registration, and identifies the partner to Amazon Web Services customers. event_namespace is determined by the partner, and is a way for the partner to categorize their events. event_name is determined by the partner, and should uniquely identify an event-generating resource within the partner system. The event_name must be unique across all Amazon Web Services customers. This is because the event source is a shared resource between the partner and customer accounts, and each partner event source unique in the partner account. The combination of event_namespace and event_name should help Amazon Web Services customers decide whether to create an event bus to receive these events.

```sql
INSERT INTO aws.events.partner_event_sources (
Name,
Account,
region
)
SELECT 
'{{ Name }}',
'{{ Account }}' /* required */,
'{{ region }}'
RETURNING
EventSourceArn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: partner_event_sources
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the partner_event_sources resource.
    - name: Name
      value: "{{ Name }}"
      description: |
        The name of the partner event source. This name must be unique and must be in the format partner_name/event_namespace/event_name . The Amazon Web Services account that wants to use this partner event source must create a partner event bus with a name that matches the name of the partner event source.
    - name: Account
      value: "{{ Account }}"
      description: |
        The Amazon Web Services account ID that is permitted to create a matching partner event bus for this partner event source.
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_partner_event_source"
    values={[
        { label: 'delete_partner_event_source', value: 'delete_partner_event_source' }
    ]}
>
<TabItem value="delete_partner_event_source">

This operation is used by SaaS partners to delete a partner event source. This operation is not used by Amazon Web Services customers. When you delete an event source, the status of the corresponding partner event bus in the Amazon Web Services customer account becomes DELETED.

```sql
DELETE FROM aws.events.partner_event_sources
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
