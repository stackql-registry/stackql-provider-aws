--- 
title: contact_flows
hide_title: false
hide_table_of_contents: false
keywords:
  - contact_flows
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

Creates, updates, deletes, gets or lists a <code>contact_flows</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="contact_flows" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.connect.contact_flows" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_contact_flow"
    values={[
        { label: 'describe_contact_flow', value: 'describe_contact_flow' },
        { label: 'list_contact_flows', value: 'list_contact_flows' },
        { label: 'search_contact_flows', value: 'search_contact_flows' }
    ]}
>
<TabItem value="describe_contact_flow">

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
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the flow.</td>
</tr>
<tr>
    <td><CopyableCode code="content" /></td>
    <td><code>string</code></td>
    <td>The JSON string that represents the content of the flow. For an example, see Example flow in Amazon Connect Flow language. Length Constraints: Minimum length of 1. Maximum length of 256000.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the flow.</td>
</tr>
<tr>
    <td><CopyableCode code="flow_content_sha_256" /></td>
    <td><code>string</code></td>
    <td>Indicates the checksum value of the flow content. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9&#93;&#123;64&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the flow.</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_region" /></td>
    <td><code>string</code></td>
    <td>The region in which the flow was last modified (pattern: &lt;code&gt;&#91;a-z&#93;&#123;2&#125;(-&#91;a-z&#93;+)&#123;1,2&#125;(-&#91;0-9&#93;)?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the flow was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the flow.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The type of flow. (ACTIVE, ARCHIVED)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the flow. (PUBLISHED, SAVED)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The tags used to organize, track, or control access for this resource. For example, &#123; "Tags": &#123;"key1":"value1", "key2":"value2"&#125; &#125;.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of the flow. For descriptions of the available types, see Choose a flow type in the Amazon Connect Administrator Guide. (CONTACT_FLOW, CUSTOMER_QUEUE, CUSTOMER_HOLD, CUSTOMER_WHISPER, AGENT_HOLD, AGENT_WHISPER, OUTBOUND_WHISPER, AGENT_TRANSFER, QUEUE_TRANSFER, CAMPAIGN)</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>integer (int64)</code></td>
    <td>The identifier of the flow version.</td>
</tr>
<tr>
    <td><CopyableCode code="version_description" /></td>
    <td><code>string</code></td>
    <td>The description of the flow version.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_contact_flows">

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
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the flow.</td>
</tr>
<tr>
    <td><CopyableCode code="contact_flow_state" /></td>
    <td><code>string</code></td>
    <td>The type of flow. (ACTIVE, ARCHIVED)</td>
</tr>
<tr>
    <td><CopyableCode code="contact_flow_status" /></td>
    <td><code>string</code></td>
    <td>The status of the flow. (PUBLISHED, SAVED)</td>
</tr>
<tr>
    <td><CopyableCode code="contact_flow_type" /></td>
    <td><code>string</code></td>
    <td>The type of flow. (CONTACT_FLOW, CUSTOMER_QUEUE, CUSTOMER_HOLD, CUSTOMER_WHISPER, AGENT_HOLD, AGENT_WHISPER, OUTBOUND_WHISPER, AGENT_TRANSFER, QUEUE_TRANSFER, CAMPAIGN)</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the flow.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the flow.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="search_contact_flows">

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
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the flow.</td>
</tr>
<tr>
    <td><CopyableCode code="content" /></td>
    <td><code>string</code></td>
    <td>The JSON string that represents the content of the flow. For an example, see Example flow in Amazon Connect Flow language. Length Constraints: Minimum length of 1. Maximum length of 256000.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the flow.</td>
</tr>
<tr>
    <td><CopyableCode code="flow_content_sha_256" /></td>
    <td><code>string</code></td>
    <td>Indicates the checksum value of the flow content. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9&#93;&#123;64&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the flow.</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_region" /></td>
    <td><code>string</code></td>
    <td>The region in which the flow was last modified (pattern: &lt;code&gt;&#91;a-z&#93;&#123;2&#125;(-&#91;a-z&#93;+)&#123;1,2&#125;(-&#91;0-9&#93;)?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the flow was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the flow.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The type of flow. (ACTIVE, ARCHIVED)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the flow. (PUBLISHED, SAVED)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The tags used to organize, track, or control access for this resource. For example, &#123; "Tags": &#123;"key1":"value1", "key2":"value2"&#125; &#125;.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of the flow. For descriptions of the available types, see Choose a flow type in the Amazon Connect Administrator Guide. (CONTACT_FLOW, CUSTOMER_QUEUE, CUSTOMER_HOLD, CUSTOMER_WHISPER, AGENT_HOLD, AGENT_WHISPER, OUTBOUND_WHISPER, AGENT_TRANSFER, QUEUE_TRANSFER, CAMPAIGN)</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>integer (int64)</code></td>
    <td>The identifier of the flow version.</td>
</tr>
<tr>
    <td><CopyableCode code="version_description" /></td>
    <td><code>string</code></td>
    <td>The description of the flow version.</td>
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
    <td><a href="#describe_contact_flow"><CopyableCode code="describe_contact_flow" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-contact_flow_id"><code>contact_flow_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes the specified flow. You can also create and update flows using the Amazon Connect Flow language. Use the $SAVED alias in the request to describe the SAVED content of a Flow. For example, arn:aws:.../contact-flow/&#123;id&#125;:$SAVED. After a flow is published, $SAVED needs to be supplied to view saved content that has not been published. Use arn:aws:.../contact-flow/&#123;id&#125;:&#123;version&#125; to retrieve the content of a specific flow version. In the response, Status indicates the flow status as either SAVED or PUBLISHED. The PUBLISHED status will initiate validation on the content. SAVED does not initiate validation of the content. SAVED | PUBLISHED</td>
</tr>
<tr>
    <td><a href="#list_contact_flows"><CopyableCode code="list_contact_flows" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-contactFlowTypes"><code>contactFlowTypes</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Provides information about the flows for the specified Amazon Connect instance. You can also create and update flows using the Amazon Connect Flow language. For more information about flows, see Flows in the Amazon Connect Administrator Guide.</td>
</tr>
<tr>
    <td><a href="#search_contact_flows"><CopyableCode code="search_contact_flows" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Searches the flows in an Amazon Connect instance, with optional filtering.</td>
</tr>
<tr>
    <td><a href="#create_contact_flow"><CopyableCode code="create_contact_flow" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates a flow for the specified Amazon Connect instance. You can also create and update flows using the Amazon Connect Flow language.</td>
</tr>
<tr>
    <td><a href="#associate_phone_number_contact_flow"><CopyableCode code="associate_phone_number_contact_flow" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-phone_number_id"><code>phone_number_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-InstanceId"><code>InstanceId</code></a>, <a href="#parameter-ContactFlowId"><code>ContactFlowId</code></a></td>
    <td></td>
    <td>Associates a flow with a phone number claimed to your Amazon Connect instance. If the number is claimed to a traffic distribution group, and you are calling this API using an instance in the Amazon Web Services Region where the traffic distribution group was created, you can use either a full phone number ARN or UUID value for the PhoneNumberId URI request parameter. However, if the number is claimed to a traffic distribution group and you are calling this API using an instance in the alternate Amazon Web Services Region associated with the traffic distribution group, you must provide a full phone number ARN. If a UUID is provided in this scenario, you will receive a ResourceNotFoundException.</td>
</tr>
<tr>
    <td><a href="#update_contact_flow_content"><CopyableCode code="update_contact_flow_content" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-contact_flow_id"><code>contact_flow_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates the specified flow. You can also create and update flows using the Amazon Connect Flow language. Use the $SAVED alias in the request to describe the SAVED content of a Flow. For example, arn:aws:.../contact-flow/&#123;id&#125;:$SAVED. After a flow is published, $SAVED needs to be supplied to view saved content that has not been published.</td>
</tr>
<tr>
    <td><a href="#disassociate_phone_number_contact_flow"><CopyableCode code="disassociate_phone_number_contact_flow" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-phone_number_id"><code>phone_number_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-instanceId"><code>instanceId</code></a></td>
    <td>Removes the flow association from a phone number claimed to your Amazon Connect instance. If the number is claimed to a traffic distribution group, and you are calling this API using an instance in the Amazon Web Services Region where the traffic distribution group was created, you can use either a full phone number ARN or UUID value for the PhoneNumberId URI request parameter. However, if the number is claimed to a traffic distribution group and you are calling this API using an instance in the alternate Amazon Web Services Region associated with the traffic distribution group, you must provide a full phone number ARN. If a UUID is provided in this scenario, you will receive a ResourceNotFoundException.</td>
</tr>
<tr>
    <td><a href="#delete_contact_flow"><CopyableCode code="delete_contact_flow" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-contact_flow_id"><code>contact_flow_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a flow for the specified Amazon Connect instance.</td>
</tr>
<tr>
    <td><a href="#start_chat_contact"><CopyableCode code="start_chat_contact" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-InstanceId"><code>InstanceId</code></a>, <a href="#parameter-ContactFlowId"><code>ContactFlowId</code></a>, <a href="#parameter-ParticipantDetails"><code>ParticipantDetails</code></a></td>
    <td></td>
    <td>Initiates a flow to start a new chat for the customer. Response of this API provides a token required to obtain credentials from the CreateParticipantConnection API in the Amazon Connect Participant Service. When a new chat contact is successfully created, clients must subscribe to the participant’s connection for the created chat within 5 minutes. This is achieved by invoking CreateParticipantConnection with WEBSOCKET and CONNECTION_CREDENTIALS. A 429 error occurs in the following situations: API rate limit is exceeded. API TPS throttling returns a TooManyRequests exception. The quota for concurrent active chats is exceeded. Active chat throttling returns a LimitExceededException. If you use the ChatDurationInMinutes parameter and receive a 400 error, your account may not support the ability to configure custom chat durations. For more information, contact Amazon Web Services Support. For more information about chat, see the following topics in the Amazon Connect Administrator Guide: Concepts: Web and mobile messaging capabilities in Amazon Connect Amazon Connect Chat security best practices</td>
</tr>
<tr>
    <td><a href="#start_outbound_chat_contact"><CopyableCode code="start_outbound_chat_contact" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-SourceEndpoint"><code>SourceEndpoint</code></a>, <a href="#parameter-DestinationEndpoint"><code>DestinationEndpoint</code></a>, <a href="#parameter-InstanceId"><code>InstanceId</code></a>, <a href="#parameter-SegmentAttributes"><code>SegmentAttributes</code></a>, <a href="#parameter-ContactFlowId"><code>ContactFlowId</code></a></td>
    <td></td>
    <td>Initiates a new outbound SMS or WhatsApp contact to a customer. Response of this API provides the ContactId of the outbound SMS or WhatsApp contact created. SourceEndpoint only supports Endpoints with CONNECT_PHONENUMBER_ARN as Type and DestinationEndpoint only supports Endpoints with TELEPHONE_NUMBER as Type. ContactFlowId initiates the flow to manage the new contact created. This API can be used to initiate outbound SMS or WhatsApp contacts for an agent, or it can also deflect an ongoing contact to an outbound SMS or WhatsApp contact by using the StartOutboundChatContact Flow Action. For more information about using SMS or WhatsApp in Amazon Connect, see the following topics in the Amazon Connect Administrator Guide: Set up SMS messaging Request an SMS-enabled phone number through Amazon Web Services End User Messaging SMS Set up WhatsApp Business messaging</td>
</tr>
<tr>
    <td><a href="#start_outbound_voice_contact"><CopyableCode code="start_outbound_voice_contact" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DestinationPhoneNumber"><code>DestinationPhoneNumber</code></a>, <a href="#parameter-ContactFlowId"><code>ContactFlowId</code></a>, <a href="#parameter-InstanceId"><code>InstanceId</code></a></td>
    <td></td>
    <td>Places an outbound call to a contact, and then initiates the flow. It performs the actions in the flow that's specified (in ContactFlowId). Agents do not initiate the outbound API, which means that they do not dial the contact. If the flow places an outbound call to a contact, and then puts the contact in queue, the call is then routed to the agent, like any other inbound case. Dialing timeout for this operation can be configured with the “RingTimeoutInSeconds” parameter. If not specified, the default dialing timeout will be 60 seconds which means if the call is not connected within 60 seconds, it fails. UK numbers with a 447 prefix are not allowed by default. Before you can dial these UK mobile numbers, you must submit a service quota increase request. For more information, see Amazon Connect Service Quotas in the Amazon Connect Administrator Guide. Campaign calls are not allowed by default. Before you can make a call with TrafficType = CAMPAIGN, you must submit a service quota increase request to the quota Amazon Connect campaigns. For Preview dialing mode, only the Amazon Connect outbound campaigns service principal is allowed to assume a role in your account and call this API with OutboundStrategy.</td>
</tr>
<tr>
    <td><a href="#start_web_rtc_contact"><CopyableCode code="start_web_rtc_contact" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ContactFlowId"><code>ContactFlowId</code></a>, <a href="#parameter-InstanceId"><code>InstanceId</code></a>, <a href="#parameter-ParticipantDetails"><code>ParticipantDetails</code></a></td>
    <td></td>
    <td>Places an inbound in-app, web, or video call to a contact, and then initiates the flow. It performs the actions in the flow that are specified (in ContactFlowId) and present in the Amazon Connect instance (specified as InstanceId).</td>
</tr>
<tr>
    <td><a href="#transfer_contact"><CopyableCode code="transfer_contact" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-InstanceId"><code>InstanceId</code></a>, <a href="#parameter-ContactId"><code>ContactId</code></a>, <a href="#parameter-ContactFlowId"><code>ContactFlowId</code></a></td>
    <td></td>
    <td>Transfers TASK or EMAIL contacts from one agent or queue to another agent or queue at any point after a contact is created. You can transfer a contact to another queue by providing the flow which orchestrates the contact to the destination queue. This gives you more control over contact handling and helps you adhere to the service level agreement (SLA) guaranteed to your customers. Note the following requirements: Transfer is only supported for TASK and EMAIL contacts. Do not use both QueueId and UserId in the same call. The following flow types are supported: Inbound flow, Transfer to agent flow, and Transfer to queue flow. The TransferContact API can be called only on active contacts. A contact cannot be transferred more than 11 times.</td>
</tr>
<tr>
    <td><a href="#update_contact_flow_metadata"><CopyableCode code="update_contact_flow_metadata" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-contact_flow_id"><code>contact_flow_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates metadata about specified flow.</td>
</tr>
<tr>
    <td><a href="#update_contact_flow_name"><CopyableCode code="update_contact_flow_name" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-contact_flow_id"><code>contact_flow_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>The name of the flow. You can also create and update flows using the Amazon Connect Flow language.</td>
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
<tr id="parameter-contact_flow_id">
    <td><CopyableCode code="contact_flow_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the flow.</td>
</tr>
<tr id="parameter-instance_id">
    <td><CopyableCode code="instance_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the Amazon Connect instance.</td>
</tr>
<tr id="parameter-phone_number_id">
    <td><CopyableCode code="phone_number_id" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for the phone number.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-contactFlowTypes">
    <td><CopyableCode code="contactFlowTypes" /></td>
    <td><code>array</code></td>
    <td>The type of flow.</td>
</tr>
<tr id="parameter-instanceId">
    <td><CopyableCode code="instanceId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return per page. The default MaxResult size is 100.</td>
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
    defaultValue="describe_contact_flow"
    values={[
        { label: 'describe_contact_flow', value: 'describe_contact_flow' },
        { label: 'list_contact_flows', value: 'list_contact_flows' },
        { label: 'search_contact_flows', value: 'search_contact_flows' }
    ]}
>
<TabItem value="describe_contact_flow">

Describes the specified flow. You can also create and update flows using the Amazon Connect Flow language. Use the $SAVED alias in the request to describe the SAVED content of a Flow. For example, arn:aws:.../contact-flow/&#123;id&#125;:$SAVED. After a flow is published, $SAVED needs to be supplied to view saved content that has not been published. Use arn:aws:.../contact-flow/&#123;id&#125;:&#123;version&#125; to retrieve the content of a specific flow version. In the response, Status indicates the flow status as either SAVED or PUBLISHED. The PUBLISHED status will initiate validation on the content. SAVED does not initiate validation of the content. SAVED | PUBLISHED

```sql
SELECT
arn,
content,
description,
flow_content_sha_256,
id,
last_modified_region,
last_modified_time,
name,
state,
status,
tags,
type,
version,
version_description
FROM aws.connect.contact_flows
WHERE instance_id = '{{ instance_id }}' -- required
AND contact_flow_id = '{{ contact_flow_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_contact_flows">

Provides information about the flows for the specified Amazon Connect instance. You can also create and update flows using the Amazon Connect Flow language. For more information about flows, see Flows in the Amazon Connect Administrator Guide.

```sql
SELECT
arn,
contact_flow_state,
contact_flow_status,
contact_flow_type,
id,
name
FROM aws.connect.contact_flows
WHERE instance_id = '{{ instance_id }}' -- required
AND region = '{{ region }}' -- required
AND contactFlowTypes = '{{ contactFlowTypes }}'
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
<TabItem value="search_contact_flows">

Searches the flows in an Amazon Connect instance, with optional filtering.

```sql
SELECT
arn,
content,
description,
flow_content_sha_256,
id,
last_modified_region,
last_modified_time,
name,
state,
status,
tags,
type,
version,
version_description
FROM aws.connect.contact_flows
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_contact_flow"
    values={[
        { label: 'create_contact_flow', value: 'create_contact_flow' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_contact_flow">

Creates a flow for the specified Amazon Connect instance. You can also create and update flows using the Amazon Connect Flow language.

```sql
INSERT INTO aws.connect.contact_flows (
Name,
Type,
Description,
Content,
Status,
Tags,
instance_id,
region
)
SELECT 
'{{ Name }}',
'{{ Type }}',
'{{ Description }}',
'{{ Content }}',
'{{ Status }}',
'{{ Tags }}',
'{{ instance_id }}',
'{{ region }}'
RETURNING
contact_flow_arn,
contact_flow_id,
flow_content_sha_256
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: contact_flows
  props:
    - name: instance_id
      value: "{{ instance_id }}"
      description: Required parameter for the contact_flows resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the contact_flows resource.
    - name: Name
      value: "{{ Name }}"
    - name: Type
      value: "{{ Type }}"
      valid_values: ['CONTACT_FLOW', 'CUSTOMER_QUEUE', 'CUSTOMER_HOLD', 'CUSTOMER_WHISPER', 'AGENT_HOLD', 'AGENT_WHISPER', 'OUTBOUND_WHISPER', 'AGENT_TRANSFER', 'QUEUE_TRANSFER', 'CAMPAIGN']
    - name: Description
      value: "{{ Description }}"
    - name: Content
      value: "{{ Content }}"
    - name: Status
      value: "{{ Status }}"
      valid_values: ['PUBLISHED', 'SAVED']
    - name: Tags
      value: "{{ Tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="associate_phone_number_contact_flow"
    values={[
        { label: 'associate_phone_number_contact_flow', value: 'associate_phone_number_contact_flow' },
        { label: 'update_contact_flow_content', value: 'update_contact_flow_content' },
        { label: 'disassociate_phone_number_contact_flow', value: 'disassociate_phone_number_contact_flow' }
    ]}
>
<TabItem value="associate_phone_number_contact_flow">

Associates a flow with a phone number claimed to your Amazon Connect instance. If the number is claimed to a traffic distribution group, and you are calling this API using an instance in the Amazon Web Services Region where the traffic distribution group was created, you can use either a full phone number ARN or UUID value for the PhoneNumberId URI request parameter. However, if the number is claimed to a traffic distribution group and you are calling this API using an instance in the alternate Amazon Web Services Region associated with the traffic distribution group, you must provide a full phone number ARN. If a UUID is provided in this scenario, you will receive a ResourceNotFoundException.

```sql
UPDATE aws.connect.contact_flows
SET 
InstanceId = '{{ InstanceId }}',
ContactFlowId = '{{ ContactFlowId }}'
WHERE 
phone_number_id = '{{ phone_number_id }}' --required
AND region = '{{ region }}' --required
AND InstanceId = '{{ InstanceId }}' --required
AND ContactFlowId = '{{ ContactFlowId }}' --required;
```
</TabItem>
<TabItem value="update_contact_flow_content">

Updates the specified flow. You can also create and update flows using the Amazon Connect Flow language. Use the $SAVED alias in the request to describe the SAVED content of a Flow. For example, arn:aws:.../contact-flow/&#123;id&#125;:$SAVED. After a flow is published, $SAVED needs to be supplied to view saved content that has not been published.

```sql
UPDATE aws.connect.contact_flows
SET 
Content = '{{ Content }}'
WHERE 
instance_id = '{{ instance_id }}' --required
AND contact_flow_id = '{{ contact_flow_id }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
<TabItem value="disassociate_phone_number_contact_flow">

Removes the flow association from a phone number claimed to your Amazon Connect instance. If the number is claimed to a traffic distribution group, and you are calling this API using an instance in the Amazon Web Services Region where the traffic distribution group was created, you can use either a full phone number ARN or UUID value for the PhoneNumberId URI request parameter. However, if the number is claimed to a traffic distribution group and you are calling this API using an instance in the alternate Amazon Web Services Region associated with the traffic distribution group, you must provide a full phone number ARN. If a UUID is provided in this scenario, you will receive a ResourceNotFoundException.

```sql
UPDATE aws.connect.contact_flows
SET 
-- No updatable properties
WHERE 
phone_number_id = '{{ phone_number_id }}' --required
AND region = '{{ region }}' --required
AND instanceId = '{{ instanceId}}';
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_contact_flow"
    values={[
        { label: 'delete_contact_flow', value: 'delete_contact_flow' }
    ]}
>
<TabItem value="delete_contact_flow">

Deletes a flow for the specified Amazon Connect instance.

```sql
DELETE FROM aws.connect.contact_flows
WHERE instance_id = '{{ instance_id }}' --required
AND contact_flow_id = '{{ contact_flow_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="start_chat_contact"
    values={[
        { label: 'start_chat_contact', value: 'start_chat_contact' },
        { label: 'start_outbound_chat_contact', value: 'start_outbound_chat_contact' },
        { label: 'start_outbound_voice_contact', value: 'start_outbound_voice_contact' },
        { label: 'start_web_rtc_contact', value: 'start_web_rtc_contact' },
        { label: 'transfer_contact', value: 'transfer_contact' },
        { label: 'update_contact_flow_metadata', value: 'update_contact_flow_metadata' },
        { label: 'update_contact_flow_name', value: 'update_contact_flow_name' }
    ]}
>
<TabItem value="start_chat_contact">

Initiates a flow to start a new chat for the customer. Response of this API provides a token required to obtain credentials from the CreateParticipantConnection API in the Amazon Connect Participant Service. When a new chat contact is successfully created, clients must subscribe to the participant’s connection for the created chat within 5 minutes. This is achieved by invoking CreateParticipantConnection with WEBSOCKET and CONNECTION_CREDENTIALS. A 429 error occurs in the following situations: API rate limit is exceeded. API TPS throttling returns a TooManyRequests exception. The quota for concurrent active chats is exceeded. Active chat throttling returns a LimitExceededException. If you use the ChatDurationInMinutes parameter and receive a 400 error, your account may not support the ability to configure custom chat durations. For more information, contact Amazon Web Services Support. For more information about chat, see the following topics in the Amazon Connect Administrator Guide: Concepts: Web and mobile messaging capabilities in Amazon Connect Amazon Connect Chat security best practices

```sql
EXEC aws.connect.contact_flows.start_chat_contact 
@region='{{ region }}' --required 
@@json=
'{
"InstanceId": "{{ InstanceId }}", 
"ContactFlowId": "{{ ContactFlowId }}", 
"Attributes": "{{ Attributes }}", 
"ParticipantDetails": "{{ ParticipantDetails }}", 
"ParticipantConfiguration": "{{ ParticipantConfiguration }}", 
"InitialMessage": "{{ InitialMessage }}", 
"ClientToken": "{{ ClientToken }}", 
"ChatDurationInMinutes": {{ ChatDurationInMinutes }}, 
"SupportedMessagingContentTypes": "{{ SupportedMessagingContentTypes }}", 
"PersistentChat": "{{ PersistentChat }}", 
"RelatedContactId": "{{ RelatedContactId }}", 
"SegmentAttributes": "{{ SegmentAttributes }}", 
"CustomerId": "{{ CustomerId }}", 
"DisconnectOnCustomerExit": "{{ DisconnectOnCustomerExit }}"
}'
;
```
</TabItem>
<TabItem value="start_outbound_chat_contact">

Initiates a new outbound SMS or WhatsApp contact to a customer. Response of this API provides the ContactId of the outbound SMS or WhatsApp contact created. SourceEndpoint only supports Endpoints with CONNECT_PHONENUMBER_ARN as Type and DestinationEndpoint only supports Endpoints with TELEPHONE_NUMBER as Type. ContactFlowId initiates the flow to manage the new contact created. This API can be used to initiate outbound SMS or WhatsApp contacts for an agent, or it can also deflect an ongoing contact to an outbound SMS or WhatsApp contact by using the StartOutboundChatContact Flow Action. For more information about using SMS or WhatsApp in Amazon Connect, see the following topics in the Amazon Connect Administrator Guide: Set up SMS messaging Request an SMS-enabled phone number through Amazon Web Services End User Messaging SMS Set up WhatsApp Business messaging

```sql
EXEC aws.connect.contact_flows.start_outbound_chat_contact 
@region='{{ region }}' --required 
@@json=
'{
"SourceEndpoint": "{{ SourceEndpoint }}", 
"DestinationEndpoint": "{{ DestinationEndpoint }}", 
"InstanceId": "{{ InstanceId }}", 
"SegmentAttributes": "{{ SegmentAttributes }}", 
"Attributes": "{{ Attributes }}", 
"ContactFlowId": "{{ ContactFlowId }}", 
"ChatDurationInMinutes": {{ ChatDurationInMinutes }}, 
"ParticipantDetails": "{{ ParticipantDetails }}", 
"InitialSystemMessage": "{{ InitialSystemMessage }}", 
"InitialTemplatedSystemMessage": "{{ InitialTemplatedSystemMessage }}", 
"RelatedContactId": "{{ RelatedContactId }}", 
"SupportedMessagingContentTypes": "{{ SupportedMessagingContentTypes }}", 
"ClientToken": "{{ ClientToken }}"
}'
;
```
</TabItem>
<TabItem value="start_outbound_voice_contact">

Places an outbound call to a contact, and then initiates the flow. It performs the actions in the flow that's specified (in ContactFlowId). Agents do not initiate the outbound API, which means that they do not dial the contact. If the flow places an outbound call to a contact, and then puts the contact in queue, the call is then routed to the agent, like any other inbound case. Dialing timeout for this operation can be configured with the “RingTimeoutInSeconds” parameter. If not specified, the default dialing timeout will be 60 seconds which means if the call is not connected within 60 seconds, it fails. UK numbers with a 447 prefix are not allowed by default. Before you can dial these UK mobile numbers, you must submit a service quota increase request. For more information, see Amazon Connect Service Quotas in the Amazon Connect Administrator Guide. Campaign calls are not allowed by default. Before you can make a call with TrafficType = CAMPAIGN, you must submit a service quota increase request to the quota Amazon Connect campaigns. For Preview dialing mode, only the Amazon Connect outbound campaigns service principal is allowed to assume a role in your account and call this API with OutboundStrategy.

```sql
EXEC aws.connect.contact_flows.start_outbound_voice_contact 
@region='{{ region }}' --required 
@@json=
'{
"Name": "{{ Name }}", 
"Description": "{{ Description }}", 
"References": "{{ References }}", 
"RelatedContactId": "{{ RelatedContactId }}", 
"DestinationPhoneNumber": "{{ DestinationPhoneNumber }}", 
"ContactFlowId": "{{ ContactFlowId }}", 
"InstanceId": "{{ InstanceId }}", 
"ClientToken": "{{ ClientToken }}", 
"SourcePhoneNumber": "{{ SourcePhoneNumber }}", 
"QueueId": "{{ QueueId }}", 
"Attributes": "{{ Attributes }}", 
"AnswerMachineDetectionConfig": "{{ AnswerMachineDetectionConfig }}", 
"CampaignId": "{{ CampaignId }}", 
"TrafficType": "{{ TrafficType }}", 
"OutboundStrategy": "{{ OutboundStrategy }}", 
"RingTimeoutInSeconds": {{ RingTimeoutInSeconds }}
}'
;
```
</TabItem>
<TabItem value="start_web_rtc_contact">

Places an inbound in-app, web, or video call to a contact, and then initiates the flow. It performs the actions in the flow that are specified (in ContactFlowId) and present in the Amazon Connect instance (specified as InstanceId).

```sql
EXEC aws.connect.contact_flows.start_web_rtc_contact 
@region='{{ region }}' --required 
@@json=
'{
"Attributes": "{{ Attributes }}", 
"ClientToken": "{{ ClientToken }}", 
"ContactFlowId": "{{ ContactFlowId }}", 
"InstanceId": "{{ InstanceId }}", 
"AllowedCapabilities": "{{ AllowedCapabilities }}", 
"ParticipantDetails": "{{ ParticipantDetails }}", 
"RelatedContactId": "{{ RelatedContactId }}", 
"References": "{{ References }}", 
"Description": "{{ Description }}"
}'
;
```
</TabItem>
<TabItem value="transfer_contact">

Transfers TASK or EMAIL contacts from one agent or queue to another agent or queue at any point after a contact is created. You can transfer a contact to another queue by providing the flow which orchestrates the contact to the destination queue. This gives you more control over contact handling and helps you adhere to the service level agreement (SLA) guaranteed to your customers. Note the following requirements: Transfer is only supported for TASK and EMAIL contacts. Do not use both QueueId and UserId in the same call. The following flow types are supported: Inbound flow, Transfer to agent flow, and Transfer to queue flow. The TransferContact API can be called only on active contacts. A contact cannot be transferred more than 11 times.

```sql
EXEC aws.connect.contact_flows.transfer_contact 
@region='{{ region }}' --required 
@@json=
'{
"InstanceId": "{{ InstanceId }}", 
"ContactId": "{{ ContactId }}", 
"QueueId": "{{ QueueId }}", 
"UserId": "{{ UserId }}", 
"ContactFlowId": "{{ ContactFlowId }}", 
"ClientToken": "{{ ClientToken }}"
}'
;
```
</TabItem>
<TabItem value="update_contact_flow_metadata">

Updates metadata about specified flow.

```sql
EXEC aws.connect.contact_flows.update_contact_flow_metadata 
@instance_id='{{ instance_id }}' --required, 
@contact_flow_id='{{ contact_flow_id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"Name": "{{ Name }}", 
"Description": "{{ Description }}", 
"ContactFlowState": "{{ ContactFlowState }}"
}'
;
```
</TabItem>
<TabItem value="update_contact_flow_name">

The name of the flow. You can also create and update flows using the Amazon Connect Flow language.

```sql
EXEC aws.connect.contact_flows.update_contact_flow_name 
@instance_id='{{ instance_id }}' --required, 
@contact_flow_id='{{ contact_flow_id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"Name": "{{ Name }}", 
"Description": "{{ Description }}"
}'
;
```
</TabItem>
</Tabs>
