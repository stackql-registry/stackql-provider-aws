--- 
title: contacts
hide_title: false
hide_table_of_contents: false
keywords:
  - contacts
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

Creates, updates, deletes, gets or lists a <code>contacts</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="contacts" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.connect.contacts" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_contact"
    values={[
        { label: 'describe_contact', value: 'describe_contact' },
        { label: 'search_contacts', value: 'search_contacts' }
    ]}
>
<TabItem value="describe_contact">

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
    <td><CopyableCode code="additional_email_recipients" /></td>
    <td><code>object</code></td>
    <td>List of additional email addresses for an email contact.</td>
</tr>
<tr>
    <td><CopyableCode code="agent_info" /></td>
    <td><code>object</code></td>
    <td>Information about the agent who accepted the contact.</td>
</tr>
<tr>
    <td><CopyableCode code="answering_machine_detection_status" /></td>
    <td><code>string</code></td>
    <td>Indicates how an outbound campaign call is actually disposed if the contact is connected to Connect Customer. (ANSWERED, UNDETECTED, ERROR, HUMAN_ANSWERED, SIT_TONE_DETECTED, SIT_TONE_BUSY, SIT_TONE_INVALID_NUMBER, FAX_MACHINE_DETECTED, VOICEMAIL_BEEP, VOICEMAIL_NO_BEEP, AMD_UNRESOLVED, AMD_UNANSWERED, AMD_ERROR, AMD_NOT_APPLICABLE)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) for the contact.</td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>The attributes of the contact.</td>
</tr>
<tr>
    <td><CopyableCode code="campaign" /></td>
    <td><code>object</code></td>
    <td>Information associated with a campaign.</td>
</tr>
<tr>
    <td><CopyableCode code="channel" /></td>
    <td><code>string</code></td>
    <td>How the contact reached your contact center. (VOICE, CHAT, TASK, EMAIL)</td>
</tr>
<tr>
    <td><CopyableCode code="chat_metrics" /></td>
    <td><code>object</code></td>
    <td>Information about how agent, bot, and customer interact in a chat contact.</td>
</tr>
<tr>
    <td><CopyableCode code="connected_to_system_timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when customer endpoint connected to Connect Customer.</td>
</tr>
<tr>
    <td><CopyableCode code="contact_association_id" /></td>
    <td><code>string</code></td>
    <td>This is the root contactId which is used as a unique identifier for all subsequent contacts in a contact tree.</td>
</tr>
<tr>
    <td><CopyableCode code="contact_details" /></td>
    <td><code>object</code></td>
    <td>A map of string key/value pairs that contain user-defined attributes which are lightly typed within the contact. This object is used only for task contacts.</td>
</tr>
<tr>
    <td><CopyableCode code="contact_evaluations" /></td>
    <td><code>object</code></td>
    <td>Information about the contact evaluations where the key is the FormId, which is a unique identifier for the form.</td>
</tr>
<tr>
    <td><CopyableCode code="customer" /></td>
    <td><code>object</code></td>
    <td>Information about the Customer on the contact.</td>
</tr>
<tr>
    <td><CopyableCode code="customer_endpoint" /></td>
    <td><code>object</code></td>
    <td>The customer or external third party participant endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="customer_id" /></td>
    <td><code>string</code></td>
    <td>The customer's identification number. For example, the CustomerId may be a customer number from your CRM. You can create a Lambda function to pull the unique customer ID of the caller from your CRM system. If you enable Connect Customer Voice ID capability, this attribute is populated with the CustomerSpeakerId of the caller.</td>
</tr>
<tr>
    <td><CopyableCode code="customer_voice_activity" /></td>
    <td><code>object</code></td>
    <td>Information about customer’s voice activity.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the contact.</td>
</tr>
<tr>
    <td><CopyableCode code="disconnect_details" /></td>
    <td><code>object</code></td>
    <td>Information about the call disconnect experience.</td>
</tr>
<tr>
    <td><CopyableCode code="disconnect_reason" /></td>
    <td><code>string</code></td>
    <td>The disconnect reason for the contact. For a list and description of all the possible disconnect reasons by channel, see DisconnectReason under ContactTraceRecord in the Connect Customer Administrator Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="disconnect_timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the customer endpoint disconnected from the current contact, in UTC time. In transfer scenarios, the DisconnectTimestamp of the previous contact indicates the date and time when that contact ended.</td>
</tr>
<tr>
    <td><CopyableCode code="global_resiliency_metadata" /></td>
    <td><code>object</code></td>
    <td>Information about the global resiliency configuration for the contact, including traffic distribution details.</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The identifier for the contact.</td>
</tr>
<tr>
    <td><CopyableCode code="initial_contact_id" /></td>
    <td><code>string</code></td>
    <td>If this contact is related to other contacts, this is the ID of the initial contact.</td>
</tr>
<tr>
    <td><CopyableCode code="initiation_method" /></td>
    <td><code>string</code></td>
    <td>Indicates how the contact was initiated. (INBOUND, OUTBOUND, TRANSFER, QUEUE_TRANSFER, CALLBACK, API, DISCONNECT, MONITOR, EXTERNAL_OUTBOUND, WEBRTC_API, AGENT_REPLY, FLOW)</td>
</tr>
<tr>
    <td><CopyableCode code="initiation_timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time this contact was initiated, in UTC time. For INBOUND, this is when the contact arrived. For OUTBOUND, this is when the agent began dialing. For CALLBACK, this is when the callback contact was created. For TRANSFER and QUEUE_TRANSFER, this is when the transfer was initiated. For API, this is when the request arrived. For EXTERNAL_OUTBOUND, this is when the agent started dialing the external participant. For MONITOR, this is when the supervisor started listening to a contact.</td>
</tr>
<tr>
    <td><CopyableCode code="last_paused_timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the contact was last paused.</td>
</tr>
<tr>
    <td><CopyableCode code="last_resumed_timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the contact was last resumed.</td>
</tr>
<tr>
    <td><CopyableCode code="last_update_timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when contact was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the contact.</td>
</tr>
<tr>
    <td><CopyableCode code="next_contacts" /></td>
    <td><code>array</code></td>
    <td>List of next contact entries for the contact.</td>
</tr>
<tr>
    <td><CopyableCode code="outbound_strategy" /></td>
    <td><code>object</code></td>
    <td>Information about the outbound strategy.</td>
</tr>
<tr>
    <td><CopyableCode code="previous_contact_id" /></td>
    <td><code>string</code></td>
    <td>If this contact is not the first contact, this is the ID of the previous contact.</td>
</tr>
<tr>
    <td><CopyableCode code="quality_metrics" /></td>
    <td><code>object</code></td>
    <td>Information about the quality of the participant's media connection.</td>
</tr>
<tr>
    <td><CopyableCode code="queue_info" /></td>
    <td><code>object</code></td>
    <td>If this contact was queued, this contains information about the queue.</td>
</tr>
<tr>
    <td><CopyableCode code="queue_priority" /></td>
    <td><code>integer (int64)</code></td>
    <td>An integer that represents the queue priority to be applied to the contact (lower priorities are routed preferentially). Cannot be specified if the QueueTimeAdjustmentSeconds is specified. Must be statically defined, must be larger than zero, and a valid integer value. Default Value is 5.</td>
</tr>
<tr>
    <td><CopyableCode code="queue_time_adjustment_seconds" /></td>
    <td><code>integer</code></td>
    <td>An integer that represents the queue time adjust to be applied to the contact, in seconds (longer / larger queue time are routed preferentially). Cannot be specified if the QueuePriority is specified. Must be statically defined and a valid integer value.</td>
</tr>
<tr>
    <td><CopyableCode code="recordings" /></td>
    <td><code>array</code></td>
    <td>If recording was enabled, this is information about the recordings.</td>
</tr>
<tr>
    <td><CopyableCode code="related_contact_id" /></td>
    <td><code>string</code></td>
    <td>The contactId that is related to this contact.</td>
</tr>
<tr>
    <td><CopyableCode code="ring_start_timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when ringing started for a campaign call.</td>
</tr>
<tr>
    <td><CopyableCode code="routing_criteria" /></td>
    <td><code>object</code></td>
    <td>Latest routing criteria on the contact.</td>
</tr>
<tr>
    <td><CopyableCode code="scheduled_timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp, in Unix epoch time format, at which to start running the inbound flow.</td>
</tr>
<tr>
    <td><CopyableCode code="segment_attributes" /></td>
    <td><code>object</code></td>
    <td>A set of system defined key-value pairs stored on individual contact segments using an attribute map. The attributes are standard Connect Customer attributes and can be accessed in flows. Attribute keys can include only alphanumeric, -, and _ characters. This field can be used to show channel subtype. For example, connect:Guide or connect:SMS.</td>
</tr>
<tr>
    <td><CopyableCode code="system_endpoint" /></td>
    <td><code>object</code></td>
    <td>The system endpoint. For INBOUND, this is the phone number or email address that the customer dialed. For OUTBOUND and EXTERNAL_OUTBOUND, this is the outbound caller ID number assigned to the outbound queue that is used to dial the customer. For callback, this shows up as Softphone for calls handled by agents with softphone.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>Tags associated with the contact. This contains both Amazon Web Services generated and user-defined tags.</td>
</tr>
<tr>
    <td><CopyableCode code="task_template_info" /></td>
    <td><code>object</code></td>
    <td>If this contact was created using a task template, this contains information about the task template.</td>
</tr>
<tr>
    <td><CopyableCode code="total_pause_count" /></td>
    <td><code>integer</code></td>
    <td>Total pause count for a contact.</td>
</tr>
<tr>
    <td><CopyableCode code="total_pause_duration_in_seconds" /></td>
    <td><code>integer</code></td>
    <td>Total pause duration for a contact in seconds.</td>
</tr>
<tr>
    <td><CopyableCode code="wisdom_info" /></td>
    <td><code>object</code></td>
    <td>Information about Connect Customer Wisdom.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="search_contacts">

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
    <td><CopyableCode code="agent_info" /></td>
    <td><code>object</code></td>
    <td>Information about the agent who accepted the contact.</td>
</tr>
<tr>
    <td><CopyableCode code="ai_agent_info" /></td>
    <td><code>array</code></td>
    <td>Information about the AI agents involved in the contact.</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the contact.</td>
</tr>
<tr>
    <td><CopyableCode code="channel" /></td>
    <td><code>string</code></td>
    <td>How the contact reached your contact center. (VOICE, CHAT, TASK, EMAIL)</td>
</tr>
<tr>
    <td><CopyableCode code="disconnect_timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the customer endpoint disconnected from Connect Customer.</td>
</tr>
<tr>
    <td><CopyableCode code="global_resiliency_metadata" /></td>
    <td><code>object</code></td>
    <td>Additional routing information for contacts created in ACGR instances.</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the contact summary.</td>
</tr>
<tr>
    <td><CopyableCode code="initial_contact_id" /></td>
    <td><code>string</code></td>
    <td>If this contact is related to other contacts, this is the ID of the initial contact.</td>
</tr>
<tr>
    <td><CopyableCode code="initiation_method" /></td>
    <td><code>string</code></td>
    <td>Indicates how the contact was initiated. (INBOUND, OUTBOUND, TRANSFER, QUEUE_TRANSFER, CALLBACK, API, DISCONNECT, MONITOR, EXTERNAL_OUTBOUND, WEBRTC_API, AGENT_REPLY, FLOW)</td>
</tr>
<tr>
    <td><CopyableCode code="initiation_timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time this contact was initiated, in UTC time. For INBOUND, this is when the contact arrived. For OUTBOUND, this is when the agent began dialing. For CALLBACK, this is when the callback contact was created. For TRANSFER and QUEUE_TRANSFER, this is when the transfer was initiated. For API, this is when the request arrived. For EXTERNAL_OUTBOUND, this is when the agent started dialing the external participant. For MONITOR, this is when the supervisor started listening to a contact.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Indicates name of the contact.</td>
</tr>
<tr>
    <td><CopyableCode code="previous_contact_id" /></td>
    <td><code>string</code></td>
    <td>If this contact is not the first contact, this is the ID of the previous contact.</td>
</tr>
<tr>
    <td><CopyableCode code="queue_info" /></td>
    <td><code>object</code></td>
    <td>If this contact was queued, this contains information about the queue.</td>
</tr>
<tr>
    <td><CopyableCode code="routing_criteria" /></td>
    <td><code>object</code></td>
    <td>Latest routing criteria on the contact.</td>
</tr>
<tr>
    <td><CopyableCode code="scheduled_timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp, in Unix epoch time format, at which to start running the inbound flow.</td>
</tr>
<tr>
    <td><CopyableCode code="segment_attributes" /></td>
    <td><code>object</code></td>
    <td>Set of segment attributes for a contact.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>Tags associated with the contact. This contains both Amazon Web Services generated and user-defined tags.</td>
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
    <td><a href="#describe_contact"><CopyableCode code="describe_contact" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-contact_id"><code>contact_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This API is in preview release for Connect Customer and is subject to change. Describes the specified contact. Use cases Following are common uses cases for this API: Retrieve contact information such as the caller's phone number and the specific number the caller dialed to integrate into custom monitoring or custom agent experience solutions. Detect when a customer chat session disconnects due to a network issue on the agent's end. Use the DisconnectReason field in the ContactTraceRecord to detect this event and then re-queue the chat for followup. Identify after contact work (ACW) duration and call recordings information when a COMPLETED event is received by using the contact event stream. Important things to know SystemEndpoint is not populated for contacts with initiation method of MONITOR, QUEUE_TRANSFER, or CALLBACK Contact information remains available in Connect Customer for 24 months from the InitiationTimestamp, and then it is deleted. Only contact information that is available in Connect Customer is returned by this API. Endpoints: See Connect Customer endpoints and quotas.</td>
</tr>
<tr>
    <td><a href="#search_contacts"><CopyableCode code="search_contacts" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Searches contacts in an Connect Customer instance.</td>
</tr>
<tr>
    <td><a href="#create_contact"><CopyableCode code="create_contact" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-InstanceId"><code>InstanceId</code></a>, <a href="#parameter-InitiationMethod"><code>InitiationMethod</code></a></td>
    <td></td>
    <td>Only the VOICE, EMAIL, and TASK channels are supported. For VOICE: The supported initiation method is TRANSFER. The contacts created with this initiation method have a subtype connect:ExternalAudio. For EMAIL: The supported initiation methods are OUTBOUND, AGENT_REPLY, and FLOW. For TASK: The supported initiation method is API. Contacts created with this API have a sub-type of connect:ExternalTask. Creates a new VOICE, EMAIL, or TASK contact. After a contact is created, you can move it to the desired state by using the InitiateAs parameter. While you can use API to create task contacts that are in the COMPLETED state, you must contact Amazon Web Services Support before using it for bulk import use cases. Bulk import causes your requests to be throttled or fail if your CreateContact limits aren't high enough.</td>
</tr>
<tr>
    <td><a href="#update_contact_schedule"><CopyableCode code="update_contact_schedule" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-InstanceId"><code>InstanceId</code></a>, <a href="#parameter-ContactId"><code>ContactId</code></a>, <a href="#parameter-ScheduledTime"><code>ScheduledTime</code></a></td>
    <td></td>
    <td>Updates the scheduled time of a task contact that is already scheduled.</td>
</tr>
<tr>
    <td><a href="#update_contact"><CopyableCode code="update_contact" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-contact_id"><code>contact_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This API is in preview release for Connect Customer and is subject to change. Adds or updates user-defined contact information associated with the specified contact. At least one field to be updated must be present in the request. You can add or update user-defined contact information for both ongoing and completed contacts.</td>
</tr>
<tr>
    <td><a href="#update_queue_max_contacts"><CopyableCode code="update_queue_max_contacts" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-queue_id"><code>queue_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates the maximum number of contacts allowed in a queue before it is considered full.</td>
</tr>
<tr>
    <td><a href="#delete_contact_data"><CopyableCode code="delete_contact_data" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-contact_id"><code>contact_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified fields containing personally identifiable information (PII) from a contact in the specified Connect Customer instance. We redact PII (such as customer endpoints, additional email recipients, and the email subject) from the contact and its associated contact trace record (CTR). The contact must be in a terminated state. This deletion is permanent and cannot be undone. Performing this operation permanently deletes the specified PII. There is no retention period; you cannot recover the data after deletion. We remove only the fields that Connect Customer identifies and stores as PII. Any PII that you place in fields outside the scope of this operation remains your responsibility to remove.</td>
</tr>
<tr>
    <td><a href="#start_contact_evaluation"><CopyableCode code="start_contact_evaluation" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ContactId"><code>ContactId</code></a>, <a href="#parameter-EvaluationFormId"><code>EvaluationFormId</code></a></td>
    <td></td>
    <td>Starts an empty evaluation in the specified Connect Customer instance, using the given evaluation form for the particular contact. The evaluation form version used for the contact evaluation corresponds to the currently activated version. If no version is activated for the evaluation form, the contact evaluation cannot be started. Evaluations created through the public API do not contain answer values suggested from automation.</td>
</tr>
<tr>
    <td><a href="#resume_contact_recording"><CopyableCode code="resume_contact_recording" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-InstanceId"><code>InstanceId</code></a>, <a href="#parameter-ContactId"><code>ContactId</code></a>, <a href="#parameter-InitialContactId"><code>InitialContactId</code></a></td>
    <td></td>
    <td>When a contact is being recorded, and the recording has been suspended using SuspendContactRecording, this API resumes recording whatever recording is selected in the flow configuration: call, screen, or both. If only call recording or only screen recording is enabled, then it would resume. Voice and screen recordings are supported.</td>
</tr>
<tr>
    <td><a href="#start_contact_conversational_analytics_job"><CopyableCode code="start_contact_conversational_analytics_job" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-contact_id"><code>contact_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-AnalyticsModes"><code>AnalyticsModes</code></a>, <a href="#parameter-AnalyticsConfiguration"><code>AnalyticsConfiguration</code></a></td>
    <td></td>
    <td>Starts a Contact Lens post-call analytics job for the specified contact. This API runs Conversational Analytics post-contact analysis on a voice recording that is already attached to the contact, generating transcription, sentiment analysis, redaction, and summarization results based on the provided configuration. A voice recording must already be attached to the contact before calling this API. Use CreateAttachedFile to attach a recording from an S3 source URI. For example, you can call CreateContact, then CreateAttachedFile, then StartContactConversationalAnalyticsJob to create a contact, attach a recording, and run post-call analytics.</td>
</tr>
<tr>
    <td><a href="#start_contact_media_processing"><CopyableCode code="start_contact_media_processing" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Enables in-flight message processing for an ongoing chat session. Message processing will stay active for the rest of the chat, even if an individual contact segment ends.</td>
</tr>
<tr>
    <td><a href="#start_contact_recording"><CopyableCode code="start_contact_recording" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-InstanceId"><code>InstanceId</code></a>, <a href="#parameter-ContactId"><code>ContactId</code></a>, <a href="#parameter-InitialContactId"><code>InitialContactId</code></a>, <a href="#parameter-VoiceRecordingConfiguration"><code>VoiceRecordingConfiguration</code></a></td>
    <td></td>
    <td>Starts recording the contact: If the API is called before the agent joins the call, recording starts when the agent joins the call. If the API is called after the agent joins the call, recording starts at the time of the API call. StartContactRecording is a one-time action. For example, if you use StopContactRecording to stop recording an ongoing call, you can't use StartContactRecording to restart it. For scenarios where the recording has started and you want to suspend and resume it, such as when collecting sensitive information (for example, a credit card number), use SuspendContactRecording and ResumeContactRecording. You can use this API to override the recording behavior configured in the Set recording behavior block. Only voice recordings are supported at this time.</td>
</tr>
<tr>
    <td><a href="#start_contact_streaming"><CopyableCode code="start_contact_streaming" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-InstanceId"><code>InstanceId</code></a>, <a href="#parameter-ContactId"><code>ContactId</code></a>, <a href="#parameter-ChatStreamingConfiguration"><code>ChatStreamingConfiguration</code></a>, <a href="#parameter-ClientToken"><code>ClientToken</code></a></td>
    <td></td>
    <td>Initiates real-time message streaming for a new chat contact. For more information about message streaming, see Enable real-time chat message streaming in the Connect Customer Administrator Guide. For more information about chat, see the following topics in the Connect Customer Administrator Guide: Concepts: Web and mobile messaging capabilities in Connect Customer Connect Customer Chat security best practices</td>
</tr>
<tr>
    <td><a href="#stop_contact_media_processing"><CopyableCode code="stop_contact_media_processing" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Stops in-flight message processing for an ongoing chat session.</td>
</tr>
<tr>
    <td><a href="#stop_contact_recording"><CopyableCode code="stop_contact_recording" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-InstanceId"><code>InstanceId</code></a>, <a href="#parameter-ContactId"><code>ContactId</code></a>, <a href="#parameter-InitialContactId"><code>InitialContactId</code></a></td>
    <td></td>
    <td>Stops recording a call when a contact is being recorded. StopContactRecording is a one-time action. If you use StopContactRecording to stop recording an ongoing call, you can't use StartContactRecording to restart it. For scenarios where the recording has started and you want to suspend it for sensitive information (for example, to collect a credit card number), and then restart it, use SuspendContactRecording and ResumeContactRecording. Only voice recordings are supported at this time.</td>
</tr>
<tr>
    <td><a href="#stop_contact_streaming"><CopyableCode code="stop_contact_streaming" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-InstanceId"><code>InstanceId</code></a>, <a href="#parameter-ContactId"><code>ContactId</code></a>, <a href="#parameter-StreamingId"><code>StreamingId</code></a></td>
    <td></td>
    <td>Ends message streaming on a specified contact. To restart message streaming on that contact, call the StartContactStreaming API.</td>
</tr>
<tr>
    <td><a href="#submit_contact_evaluation"><CopyableCode code="submit_contact_evaluation" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-evaluation_id"><code>evaluation_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Submits a contact evaluation in the specified Connect Customer instance. Answers included in the request are merged with existing answers for the given evaluation. If no answers or notes are passed, the evaluation is submitted with the existing answers and notes. You can delete an answer or note by passing an empty object (&#123;&#125;) to the question identifier. If a contact evaluation is already in submitted state, this operation will trigger a resubmission.</td>
</tr>
<tr>
    <td><a href="#update_contact_routing_data"><CopyableCode code="update_contact_routing_data" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-contact_id"><code>contact_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates routing priority and age on the contact (QueuePriority and QueueTimeAdjustmentInSeconds). These properties can be used to change a customer's position in the queue. For example, you can move a contact to the back of the queue by setting a lower routing priority relative to other contacts in queue; or you can move a contact to the front of the queue by increasing the routing age which will make the contact look artificially older and therefore higher up in the first-in-first-out routing order. Note that adjusting the routing age of a contact affects only its position in queue, and not its actual queue wait time as reported through metrics. These properties can also be updated by using the Set routing priority / age flow block. Either QueuePriority or QueueTimeAdjustmentInSeconds should be provided within the request body, but not both.</td>
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
<tr id="parameter-contact_id">
    <td><CopyableCode code="contact_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the contact in this instance of Connect Customer.</td>
</tr>
<tr id="parameter-evaluation_id">
    <td><CopyableCode code="evaluation_id" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for the contact evaluation.</td>
</tr>
<tr id="parameter-instance_id">
    <td><CopyableCode code="instance_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the Connect Customer instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance.</td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_contact"
    values={[
        { label: 'describe_contact', value: 'describe_contact' },
        { label: 'search_contacts', value: 'search_contacts' }
    ]}
>
<TabItem value="describe_contact">

This API is in preview release for Connect Customer and is subject to change. Describes the specified contact. Use cases Following are common uses cases for this API: Retrieve contact information such as the caller's phone number and the specific number the caller dialed to integrate into custom monitoring or custom agent experience solutions. Detect when a customer chat session disconnects due to a network issue on the agent's end. Use the DisconnectReason field in the ContactTraceRecord to detect this event and then re-queue the chat for followup. Identify after contact work (ACW) duration and call recordings information when a COMPLETED event is received by using the contact event stream. Important things to know SystemEndpoint is not populated for contacts with initiation method of MONITOR, QUEUE_TRANSFER, or CALLBACK Contact information remains available in Connect Customer for 24 months from the InitiationTimestamp, and then it is deleted. Only contact information that is available in Connect Customer is returned by this API. Endpoints: See Connect Customer endpoints and quotas.

```sql
SELECT
additional_email_recipients,
agent_info,
answering_machine_detection_status,
arn,
attributes,
campaign,
channel,
chat_metrics,
connected_to_system_timestamp,
contact_association_id,
contact_details,
contact_evaluations,
customer,
customer_endpoint,
customer_id,
customer_voice_activity,
description,
disconnect_details,
disconnect_reason,
disconnect_timestamp,
global_resiliency_metadata,
id,
initial_contact_id,
initiation_method,
initiation_timestamp,
last_paused_timestamp,
last_resumed_timestamp,
last_update_timestamp,
name,
next_contacts,
outbound_strategy,
previous_contact_id,
quality_metrics,
queue_info,
queue_priority,
queue_time_adjustment_seconds,
recordings,
related_contact_id,
ring_start_timestamp,
routing_criteria,
scheduled_timestamp,
segment_attributes,
system_endpoint,
tags,
task_template_info,
total_pause_count,
total_pause_duration_in_seconds,
wisdom_info
FROM aws.connect.contacts
WHERE instance_id = '{{ instance_id }}' -- required
AND contact_id = '{{ contact_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="search_contacts">

Searches contacts in an Connect Customer instance.

```sql
SELECT
agent_info,
ai_agent_info,
arn,
channel,
disconnect_timestamp,
global_resiliency_metadata,
id,
initial_contact_id,
initiation_method,
initiation_timestamp,
name,
previous_contact_id,
queue_info,
routing_criteria,
scheduled_timestamp,
segment_attributes,
tags
FROM aws.connect.contacts
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_contact"
    values={[
        { label: 'create_contact', value: 'create_contact' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_contact">

Only the VOICE, EMAIL, and TASK channels are supported. For VOICE: The supported initiation method is TRANSFER. The contacts created with this initiation method have a subtype connect:ExternalAudio. For EMAIL: The supported initiation methods are OUTBOUND, AGENT_REPLY, and FLOW. For TASK: The supported initiation method is API. Contacts created with this API have a sub-type of connect:ExternalTask. Creates a new VOICE, EMAIL, or TASK contact. After a contact is created, you can move it to the desired state by using the InitiateAs parameter. While you can use API to create task contacts that are in the COMPLETED state, you must contact Amazon Web Services Support before using it for bulk import use cases. Bulk import causes your requests to be throttled or fail if your CreateContact limits aren't high enough.

```sql
INSERT INTO aws.connect.contacts (
InstanceId,
ClientToken,
RelatedContactId,
Attributes,
References,
Channel,
InitiationMethod,
ExpiryDurationInMinutes,
UserInfo,
InitiateAs,
Name,
Description,
SegmentAttributes,
PreviousContactId,
region
)
SELECT 
'{{ InstanceId }}' /* required */,
'{{ ClientToken }}',
'{{ RelatedContactId }}',
'{{ Attributes }}',
'{{ References }}',
'{{ Channel }}',
'{{ InitiationMethod }}' /* required */,
{{ ExpiryDurationInMinutes }},
'{{ UserInfo }}',
'{{ InitiateAs }}',
'{{ Name }}',
'{{ Description }}',
'{{ SegmentAttributes }}',
'{{ PreviousContactId }}',
'{{ region }}'
RETURNING
contact_arn,
contact_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: contacts
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the contacts resource.
    - name: InstanceId
      value: "{{ InstanceId }}"
    - name: ClientToken
      value: "{{ ClientToken }}"
    - name: RelatedContactId
      value: "{{ RelatedContactId }}"
    - name: Attributes
      value: "{{ Attributes }}"
    - name: References
      value: "{{ References }}"
    - name: Channel
      value: "{{ Channel }}"
      valid_values: ['VOICE', 'CHAT', 'TASK', 'EMAIL']
    - name: InitiationMethod
      value: "{{ InitiationMethod }}"
      valid_values: ['INBOUND', 'OUTBOUND', 'TRANSFER', 'QUEUE_TRANSFER', 'CALLBACK', 'API', 'DISCONNECT', 'MONITOR', 'EXTERNAL_OUTBOUND', 'WEBRTC_API', 'AGENT_REPLY', 'FLOW']
    - name: ExpiryDurationInMinutes
      value: {{ ExpiryDurationInMinutes }}
    - name: UserInfo
      description: |
        The user details for the contact.
      value:
        UserId: "{{ UserId }}"
    - name: InitiateAs
      value: "{{ InitiateAs }}"
      valid_values: ['CONNECTED_TO_USER', 'COMPLETED']
    - name: Name
      value: "{{ Name }}"
    - name: Description
      value: "{{ Description }}"
    - name: SegmentAttributes
      value: "{{ SegmentAttributes }}"
    - name: PreviousContactId
      value: "{{ PreviousContactId }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_contact_schedule"
    values={[
        { label: 'update_contact_schedule', value: 'update_contact_schedule' },
        { label: 'update_contact', value: 'update_contact' },
        { label: 'update_queue_max_contacts', value: 'update_queue_max_contacts' }
    ]}
>
<TabItem value="update_contact_schedule">

Updates the scheduled time of a task contact that is already scheduled.

```sql
UPDATE aws.connect.contacts
SET 
InstanceId = '{{ InstanceId }}',
ContactId = '{{ ContactId }}',
ScheduledTime = '{{ ScheduledTime }}'
WHERE 
region = '{{ region }}' --required
AND InstanceId = '{{ InstanceId }}' --required
AND ContactId = '{{ ContactId }}' --required
AND ScheduledTime = '{{ ScheduledTime }}' --required;
```
</TabItem>
<TabItem value="update_contact">

This API is in preview release for Connect Customer and is subject to change. Adds or updates user-defined contact information associated with the specified contact. At least one field to be updated must be present in the request. You can add or update user-defined contact information for both ongoing and completed contacts.

```sql
UPDATE aws.connect.contacts
SET 
Name = '{{ Name }}',
Description = '{{ Description }}',
References = '{{ References }}',
SegmentAttributes = '{{ SegmentAttributes }}',
QueueInfo = '{{ QueueInfo }}',
UserInfo = '{{ UserInfo }}',
CustomerEndpoint = '{{ CustomerEndpoint }}',
SystemEndpoint = '{{ SystemEndpoint }}'
WHERE 
instance_id = '{{ instance_id }}' --required
AND contact_id = '{{ contact_id }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
<TabItem value="update_queue_max_contacts">

Updates the maximum number of contacts allowed in a queue before it is considered full.

```sql
UPDATE aws.connect.contacts
SET 
MaxContacts = {{ MaxContacts }}
WHERE 
instance_id = '{{ instance_id }}' --required
AND queue_id = '{{ queue_id }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_contact_data"
    values={[
        { label: 'delete_contact_data', value: 'delete_contact_data' }
    ]}
>
<TabItem value="delete_contact_data">

Deletes the specified fields containing personally identifiable information (PII) from a contact in the specified Connect Customer instance. We redact PII (such as customer endpoints, additional email recipients, and the email subject) from the contact and its associated contact trace record (CTR). The contact must be in a terminated state. This deletion is permanent and cannot be undone. Performing this operation permanently deletes the specified PII. There is no retention period; you cannot recover the data after deletion. We remove only the fields that Connect Customer identifies and stores as PII. Any PII that you place in fields outside the scope of this operation remains your responsibility to remove.

```sql
DELETE FROM aws.connect.contacts
WHERE instance_id = '{{ instance_id }}' --required
AND contact_id = '{{ contact_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="start_contact_evaluation"
    values={[
        { label: 'start_contact_evaluation', value: 'start_contact_evaluation' },
        { label: 'resume_contact_recording', value: 'resume_contact_recording' },
        { label: 'start_contact_conversational_analytics_job', value: 'start_contact_conversational_analytics_job' },
        { label: 'start_contact_media_processing', value: 'start_contact_media_processing' },
        { label: 'start_contact_recording', value: 'start_contact_recording' },
        { label: 'start_contact_streaming', value: 'start_contact_streaming' },
        { label: 'stop_contact_media_processing', value: 'stop_contact_media_processing' },
        { label: 'stop_contact_recording', value: 'stop_contact_recording' },
        { label: 'stop_contact_streaming', value: 'stop_contact_streaming' },
        { label: 'submit_contact_evaluation', value: 'submit_contact_evaluation' },
        { label: 'update_contact_routing_data', value: 'update_contact_routing_data' }
    ]}
>
<TabItem value="start_contact_evaluation">

Starts an empty evaluation in the specified Connect Customer instance, using the given evaluation form for the particular contact. The evaluation form version used for the contact evaluation corresponds to the currently activated version. If no version is activated for the evaluation form, the contact evaluation cannot be started. Evaluations created through the public API do not contain answer values suggested from automation.

```sql
EXEC aws.connect.contacts.start_contact_evaluation 
@instance_id='{{ instance_id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"ContactId": "{{ ContactId }}", 
"EvaluationFormId": "{{ EvaluationFormId }}", 
"AutoEvaluationConfiguration": "{{ AutoEvaluationConfiguration }}", 
"ClientToken": "{{ ClientToken }}", 
"Tags": "{{ Tags }}"
}'
;
```
</TabItem>
<TabItem value="resume_contact_recording">

When a contact is being recorded, and the recording has been suspended using SuspendContactRecording, this API resumes recording whatever recording is selected in the flow configuration: call, screen, or both. If only call recording or only screen recording is enabled, then it would resume. Voice and screen recordings are supported.

```sql
EXEC aws.connect.contacts.resume_contact_recording 
@region='{{ region }}' --required 
@@json=
'{
"InstanceId": "{{ InstanceId }}", 
"ContactId": "{{ ContactId }}", 
"InitialContactId": "{{ InitialContactId }}", 
"ContactRecordingType": "{{ ContactRecordingType }}"
}'
;
```
</TabItem>
<TabItem value="start_contact_conversational_analytics_job">

Starts a Contact Lens post-call analytics job for the specified contact. This API runs Conversational Analytics post-contact analysis on a voice recording that is already attached to the contact, generating transcription, sentiment analysis, redaction, and summarization results based on the provided configuration. A voice recording must already be attached to the contact before calling this API. Use CreateAttachedFile to attach a recording from an S3 source URI. For example, you can call CreateContact, then CreateAttachedFile, then StartContactConversationalAnalyticsJob to create a contact, attach a recording, and run post-call analytics.

```sql
EXEC aws.connect.contacts.start_contact_conversational_analytics_job 
@instance_id='{{ instance_id }}' --required, 
@contact_id='{{ contact_id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"AnalyticsModes": "{{ AnalyticsModes }}", 
"AnalyticsConfiguration": "{{ AnalyticsConfiguration }}", 
"ClientToken": "{{ ClientToken }}"
}'
;
```
</TabItem>
<TabItem value="start_contact_media_processing">

Enables in-flight message processing for an ongoing chat session. Message processing will stay active for the rest of the chat, even if an individual contact segment ends.

```sql
EXEC aws.connect.contacts.start_contact_media_processing 
@region='{{ region }}' --required 
@@json=
'{
"InstanceId": "{{ InstanceId }}", 
"ContactId": "{{ ContactId }}", 
"ProcessorArn": "{{ ProcessorArn }}", 
"FailureMode": "{{ FailureMode }}"
}'
;
```
</TabItem>
<TabItem value="start_contact_recording">

Starts recording the contact: If the API is called before the agent joins the call, recording starts when the agent joins the call. If the API is called after the agent joins the call, recording starts at the time of the API call. StartContactRecording is a one-time action. For example, if you use StopContactRecording to stop recording an ongoing call, you can't use StartContactRecording to restart it. For scenarios where the recording has started and you want to suspend and resume it, such as when collecting sensitive information (for example, a credit card number), use SuspendContactRecording and ResumeContactRecording. You can use this API to override the recording behavior configured in the Set recording behavior block. Only voice recordings are supported at this time.

```sql
EXEC aws.connect.contacts.start_contact_recording 
@region='{{ region }}' --required 
@@json=
'{
"InstanceId": "{{ InstanceId }}", 
"ContactId": "{{ ContactId }}", 
"InitialContactId": "{{ InitialContactId }}", 
"VoiceRecordingConfiguration": "{{ VoiceRecordingConfiguration }}"
}'
;
```
</TabItem>
<TabItem value="start_contact_streaming">

Initiates real-time message streaming for a new chat contact. For more information about message streaming, see Enable real-time chat message streaming in the Connect Customer Administrator Guide. For more information about chat, see the following topics in the Connect Customer Administrator Guide: Concepts: Web and mobile messaging capabilities in Connect Customer Connect Customer Chat security best practices

```sql
EXEC aws.connect.contacts.start_contact_streaming 
@region='{{ region }}' --required 
@@json=
'{
"InstanceId": "{{ InstanceId }}", 
"ContactId": "{{ ContactId }}", 
"ChatStreamingConfiguration": "{{ ChatStreamingConfiguration }}", 
"ClientToken": "{{ ClientToken }}"
}'
;
```
</TabItem>
<TabItem value="stop_contact_media_processing">

Stops in-flight message processing for an ongoing chat session.

```sql
EXEC aws.connect.contacts.stop_contact_media_processing 
@region='{{ region }}' --required 
@@json=
'{
"InstanceId": "{{ InstanceId }}", 
"ContactId": "{{ ContactId }}"
}'
;
```
</TabItem>
<TabItem value="stop_contact_recording">

Stops recording a call when a contact is being recorded. StopContactRecording is a one-time action. If you use StopContactRecording to stop recording an ongoing call, you can't use StartContactRecording to restart it. For scenarios where the recording has started and you want to suspend it for sensitive information (for example, to collect a credit card number), and then restart it, use SuspendContactRecording and ResumeContactRecording. Only voice recordings are supported at this time.

```sql
EXEC aws.connect.contacts.stop_contact_recording 
@region='{{ region }}' --required 
@@json=
'{
"InstanceId": "{{ InstanceId }}", 
"ContactId": "{{ ContactId }}", 
"InitialContactId": "{{ InitialContactId }}", 
"ContactRecordingType": "{{ ContactRecordingType }}"
}'
;
```
</TabItem>
<TabItem value="stop_contact_streaming">

Ends message streaming on a specified contact. To restart message streaming on that contact, call the StartContactStreaming API.

```sql
EXEC aws.connect.contacts.stop_contact_streaming 
@region='{{ region }}' --required 
@@json=
'{
"InstanceId": "{{ InstanceId }}", 
"ContactId": "{{ ContactId }}", 
"StreamingId": "{{ StreamingId }}"
}'
;
```
</TabItem>
<TabItem value="submit_contact_evaluation">

Submits a contact evaluation in the specified Connect Customer instance. Answers included in the request are merged with existing answers for the given evaluation. If no answers or notes are passed, the evaluation is submitted with the existing answers and notes. You can delete an answer or note by passing an empty object (&#123;&#125;) to the question identifier. If a contact evaluation is already in submitted state, this operation will trigger a resubmission.

```sql
EXEC aws.connect.contacts.submit_contact_evaluation 
@instance_id='{{ instance_id }}' --required, 
@evaluation_id='{{ evaluation_id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"Answers": "{{ Answers }}", 
"Notes": "{{ Notes }}", 
"SubmittedBy": "{{ SubmittedBy }}"
}'
;
```
</TabItem>
<TabItem value="update_contact_routing_data">

Updates routing priority and age on the contact (QueuePriority and QueueTimeAdjustmentInSeconds). These properties can be used to change a customer's position in the queue. For example, you can move a contact to the back of the queue by setting a lower routing priority relative to other contacts in queue; or you can move a contact to the front of the queue by increasing the routing age which will make the contact look artificially older and therefore higher up in the first-in-first-out routing order. Note that adjusting the routing age of a contact affects only its position in queue, and not its actual queue wait time as reported through metrics. These properties can also be updated by using the Set routing priority / age flow block. Either QueuePriority or QueueTimeAdjustmentInSeconds should be provided within the request body, but not both.

```sql
EXEC aws.connect.contacts.update_contact_routing_data 
@instance_id='{{ instance_id }}' --required, 
@contact_id='{{ contact_id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"QueueTimeAdjustmentSeconds": {{ QueueTimeAdjustmentSeconds }}, 
"QueuePriority": {{ QueuePriority }}, 
"RoutingCriteria": "{{ RoutingCriteria }}"
}'
;
```
</TabItem>
</Tabs>
