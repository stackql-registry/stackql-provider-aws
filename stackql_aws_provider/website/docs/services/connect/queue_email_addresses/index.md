--- 
title: queue_email_addresses
hide_title: false
hide_table_of_contents: false
keywords:
  - queue_email_addresses
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

Creates, updates, deletes, gets or lists a <code>queue_email_addresses</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="queue_email_addresses" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.connect.queue_email_addresses" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_queue_email_addresses"
    values={[
        { label: 'list_queue_email_addresses', value: 'list_queue_email_addresses' }
    ]}
>
<TabItem value="list_queue_email_addresses">

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
    <td><CopyableCode code="EmailAddressMetadataList" /></td>
    <td><code>array</code></td>
    <td>List of email address summary information for all email addresses associated with the queue. Each item contains the email address identifier, ARN, and configuration details.</td>
</tr>
<tr>
    <td><CopyableCode code="LastModifiedRegion" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services Region where this resource was last modified. (pattern: &lt;code&gt;&#91;a-z&#93;&#123;2&#125;(-&#91;a-z&#93;+)&#123;1,2&#125;(-&#91;0-9&#93;)?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="LastModifiedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when this resource was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>If there are additional results, this is the token for the next set of results.</td>
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
    <td><a href="#list_queue_email_addresses"><CopyableCode code="list_queue_email_addresses" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-queue_id"><code>queue_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Lists all email addresses that are currently associated with a specific queue, providing details about which "From" email addresses agents can select when handling email contacts. This helps administrators manage agent email address options and understand the available choices for different brands and business units. Important things to know The response includes metadata about each email address available for agent selection, including whether it's configured as the default outbound email. Agents can select from these email addresses when replying to inbound contacts or initiating outbound contacts in this queue. The list includes both explicitly associated email addresses and any default outbound email address configured for the queue. Results are paginated to handle queues with many associated email addresses (up to 50 per queue).</td>
</tr>
<tr>
    <td><a href="#associate_queue_email_addresses"><CopyableCode code="associate_queue_email_addresses" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-queue_id"><code>queue_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-EmailAddressesConfig"><code>EmailAddressesConfig</code></a></td>
    <td></td>
    <td>Associates a set of email addresses with a queue to enable agents to select different "From" (system) email addresses when replying to inbound email contacts or initiating outbound email contacts. This allows agents to handle email contacts across different brands and business units within the same queue. Important things to know You can associate up to 49 additional email addresses with a single queue, plus 1 default outbound email address, for a total of 50. The email addresses must already exist in the Amazon Connect instance before they can be associated with a queue. Agents will be able to select from these associated email addresses when handling email contacts in the queue. For inbound email contacts, agents can select from email addresses associated with the queue where the contact was accepted. For outbound email contacts, agents can select from email addresses associated with their default outbound queue configured in their routing profile.</td>
</tr>
<tr>
    <td><a href="#disassociate_queue_email_addresses"><CopyableCode code="disassociate_queue_email_addresses" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-queue_id"><code>queue_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-EmailAddressesId"><code>EmailAddressesId</code></a></td>
    <td></td>
    <td>Removes the association between a set of email addresses and a queue. After disassociation, agents will no longer be able to select these email addresses as "From" addresses when replying to inbound email contacts or initiating outbound email contacts in this queue. Important things to know Agents will no longer see these email addresses in their "From" address selection options for this queue. The email addresses themselves are not deleted from the instance, only their availability for agent selection in this queue is removed. Changes take effect immediately and will affect the agent experience in the Contact Control Panel (CCP).</td>
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
<tr id="parameter-instance_id">
    <td><CopyableCode code="instance_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance.</td>
</tr>
<tr id="parameter-queue_id">
    <td><CopyableCode code="queue_id" /></td>
    <td><code>string</code></td>
    <td>The identifier for the queue.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return per page.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_queue_email_addresses"
    values={[
        { label: 'list_queue_email_addresses', value: 'list_queue_email_addresses' }
    ]}
>
<TabItem value="list_queue_email_addresses">

Lists all email addresses that are currently associated with a specific queue, providing details about which "From" email addresses agents can select when handling email contacts. This helps administrators manage agent email address options and understand the available choices for different brands and business units. Important things to know The response includes metadata about each email address available for agent selection, including whether it's configured as the default outbound email. Agents can select from these email addresses when replying to inbound contacts or initiating outbound contacts in this queue. The list includes both explicitly associated email addresses and any default outbound email address configured for the queue. Results are paginated to handle queues with many associated email addresses (up to 50 per queue).

```sql
SELECT
EmailAddressMetadataList,
LastModifiedRegion,
LastModifiedTime,
NextToken
FROM aws.connect.queue_email_addresses
WHERE instance_id = '{{ instance_id }}' -- required
AND queue_id = '{{ queue_id }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="associate_queue_email_addresses"
    values={[
        { label: 'associate_queue_email_addresses', value: 'associate_queue_email_addresses' },
        { label: 'disassociate_queue_email_addresses', value: 'disassociate_queue_email_addresses' }
    ]}
>
<TabItem value="associate_queue_email_addresses">

Associates a set of email addresses with a queue to enable agents to select different "From" (system) email addresses when replying to inbound email contacts or initiating outbound email contacts. This allows agents to handle email contacts across different brands and business units within the same queue. Important things to know You can associate up to 49 additional email addresses with a single queue, plus 1 default outbound email address, for a total of 50. The email addresses must already exist in the Amazon Connect instance before they can be associated with a queue. Agents will be able to select from these associated email addresses when handling email contacts in the queue. For inbound email contacts, agents can select from email addresses associated with the queue where the contact was accepted. For outbound email contacts, agents can select from email addresses associated with their default outbound queue configured in their routing profile.

```sql
UPDATE aws.connect.queue_email_addresses
SET 
EmailAddressesConfig = '{{ EmailAddressesConfig }}',
ClientToken = '{{ ClientToken }}'
WHERE 
instance_id = '{{ instance_id }}' --required
AND queue_id = '{{ queue_id }}' --required
AND region = '{{ region }}' --required
AND EmailAddressesConfig = '{{ EmailAddressesConfig }}' --required;
```
</TabItem>
<TabItem value="disassociate_queue_email_addresses">

Removes the association between a set of email addresses and a queue. After disassociation, agents will no longer be able to select these email addresses as "From" addresses when replying to inbound email contacts or initiating outbound email contacts in this queue. Important things to know Agents will no longer see these email addresses in their "From" address selection options for this queue. The email addresses themselves are not deleted from the instance, only their availability for agent selection in this queue is removed. Changes take effect immediately and will affect the agent experience in the Contact Control Panel (CCP).

```sql
UPDATE aws.connect.queue_email_addresses
SET 
EmailAddressesId = '{{ EmailAddressesId }}',
ClientToken = '{{ ClientToken }}'
WHERE 
instance_id = '{{ instance_id }}' --required
AND queue_id = '{{ queue_id }}' --required
AND region = '{{ region }}' --required
AND EmailAddressesId = '{{ EmailAddressesId }}' --required;
```
</TabItem>
</Tabs>
