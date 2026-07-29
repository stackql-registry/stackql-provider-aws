--- 
title: instances
hide_title: false
hide_table_of_contents: false
keywords:
  - instances
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

Creates, updates, deletes, gets or lists an <code>instances</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="instances" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.connect.instances" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_instance"
    values={[
        { label: 'describe_instance', value: 'describe_instance' },
        { label: 'list_instances', value: 'list_instances' }
    ]}
>
<TabItem value="describe_instance">

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
    <td><CopyableCode code="instance" /></td>
    <td><code>object</code></td>
    <td>The name of the instance.</td>
</tr>
<tr>
    <td><CopyableCode code="replication_configuration" /></td>
    <td><code>object</code></td>
    <td>Status information about the replication process. This field is included only when you are using the ReplicateInstance API to replicate an Amazon Connect instance across Amazon Web Services Regions. For information about replicating Amazon Connect instances, see Create a replica of your existing Amazon Connect instance in the Amazon Connect Administrator Guide.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_instances">

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
    <td>The Amazon Resource Name (ARN) of the instance.</td>
</tr>
<tr>
    <td><CopyableCode code="created_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>When the instance was created.</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the instance.</td>
</tr>
<tr>
    <td><CopyableCode code="identity_management_type" /></td>
    <td><code>string</code></td>
    <td>The identity management type of the instance. (SAML, CONNECT_MANAGED, EXISTING_DIRECTORY)</td>
</tr>
<tr>
    <td><CopyableCode code="inbound_calls_enabled" /></td>
    <td><code>boolean</code></td>
    <td>Whether inbound calls are enabled.</td>
</tr>
<tr>
    <td><CopyableCode code="instance_access_url" /></td>
    <td><code>string</code></td>
    <td>This URL allows contact center users to access the Amazon Connect admin website.</td>
</tr>
<tr>
    <td><CopyableCode code="instance_alias" /></td>
    <td><code>string</code></td>
    <td>The alias of the instance. (pattern: &lt;code&gt;^(?!d-)(&#91;\da-zA-Z&#93;+)(&#91;-&#93;*&#91;\da-zA-Z&#93;)*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="instance_status" /></td>
    <td><code>string</code></td>
    <td>The state of the instance. (CREATION_IN_PROGRESS, ACTIVE, CREATION_FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="outbound_calls_enabled" /></td>
    <td><code>boolean</code></td>
    <td>Whether outbound calls are enabled.</td>
</tr>
<tr>
    <td><CopyableCode code="service_role" /></td>
    <td><code>string</code></td>
    <td>The service role of the instance.</td>
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
    <td><a href="#describe_instance"><CopyableCode code="describe_instance" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This API is in preview release for Amazon Connect and is subject to change. Returns the current state of the specified instance identifier. It tracks the instance while it is being created and returns an error status, if applicable. If an instance is not created successfully, the instance status reason field returns details relevant to the reason. The instance in a failed state is returned only for 24 hours after the CreateInstance API was invoked.</td>
</tr>
<tr>
    <td><a href="#list_instances"><CopyableCode code="list_instances" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>This API is in preview release for Amazon Connect and is subject to change. Return a list of instances which are in active state, creation-in-progress state, and failed state. Instances that aren't successfully created (they are in a failed state) are returned only for 24 hours after the CreateInstance API was invoked.</td>
</tr>
<tr>
    <td><a href="#create_push_notification_registration"><CopyableCode code="create_push_notification_registration" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-PinpointAppArn"><code>PinpointAppArn</code></a>, <a href="#parameter-DeviceToken"><code>DeviceToken</code></a>, <a href="#parameter-DeviceType"><code>DeviceType</code></a>, <a href="#parameter-ContactConfiguration"><code>ContactConfiguration</code></a></td>
    <td></td>
    <td>Creates registration for a device token and a chat contact to receive real-time push notifications. For more information about push notifications, see Set up push notifications in Amazon Connect for mobile chat in the Amazon Connect Administrator Guide.</td>
</tr>
<tr>
    <td><a href="#create_persistent_contact_association"><CopyableCode code="create_persistent_contact_association" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-initial_contact_id"><code>initial_contact_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-RehydrationType"><code>RehydrationType</code></a>, <a href="#parameter-SourceContactId"><code>SourceContactId</code></a></td>
    <td></td>
    <td>Enables rehydration of chats for the lifespan of a contact. For more information about chat rehydration, see Enable persistent chat in the Amazon Connect Administrator Guide.</td>
</tr>
<tr>
    <td><a href="#create_instance"><CopyableCode code="create_instance" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-IdentityManagementType"><code>IdentityManagementType</code></a>, <a href="#parameter-InboundCallsEnabled"><code>InboundCallsEnabled</code></a>, <a href="#parameter-OutboundCallsEnabled"><code>OutboundCallsEnabled</code></a></td>
    <td></td>
    <td>This API is in preview release for Amazon Connect and is subject to change. Initiates an Amazon Connect instance with all the supported channels enabled. It does not attach any storage, such as Amazon Simple Storage Service (Amazon S3) or Amazon Kinesis. It also does not allow for any configurations on features, such as Contact Lens for Amazon Connect. For more information, see Create an Amazon Connect instance in the Amazon Connect Administrator Guide. Amazon Connect enforces a limit on the total number of instances that you can create or delete in 30 days. If you exceed this limit, you will get an error message indicating there has been an excessive number of attempts at creating or deleting instances. You must wait 30 days before you can restart creating and deleting instances in your account.</td>
</tr>
<tr>
    <td><a href="#create_participant"><CopyableCode code="create_participant" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-InstanceId"><code>InstanceId</code></a>, <a href="#parameter-ContactId"><code>ContactId</code></a>, <a href="#parameter-ParticipantDetails"><code>ParticipantDetails</code></a></td>
    <td></td>
    <td>Adds a new participant into an on-going chat contact or webRTC call. For more information, see Customize chat flow experiences by integrating custom participants or Enable multi-user web, in-app, and video calling.</td>
</tr>
<tr>
    <td><a href="#associate_flow"><CopyableCode code="associate_flow" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ResourceId"><code>ResourceId</code></a>, <a href="#parameter-FlowId"><code>FlowId</code></a>, <a href="#parameter-ResourceType"><code>ResourceType</code></a></td>
    <td></td>
    <td>Associates a connect resource to a flow.</td>
</tr>
<tr>
    <td><a href="#disassociate_flow"><CopyableCode code="disassociate_flow" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-resource_id"><code>resource_id</code></a>, <a href="#parameter-resource_type"><code>resource_type</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Disassociates a connect resource from a flow.</td>
</tr>
<tr>
    <td><a href="#update_participant_role_config"><CopyableCode code="update_participant_role_config" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-contact_id"><code>contact_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ChannelConfiguration"><code>ChannelConfiguration</code></a></td>
    <td></td>
    <td>Updates timeouts for when human chat participants are to be considered idle, and when agents are automatically disconnected from a chat due to idleness. You can set four timers: Customer idle timeout Customer auto-disconnect timeout Agent idle timeout Agent auto-disconnect timeout For more information about how chat timeouts work, see Set up chat timeouts for human participants.</td>
</tr>
<tr>
    <td><a href="#associate_analytics_data_set"><CopyableCode code="associate_analytics_data_set" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DataSetId"><code>DataSetId</code></a></td>
    <td></td>
    <td>Associates the specified dataset for a Amazon Connect instance with the target account. You can associate only one dataset in a single call.</td>
</tr>
<tr>
    <td><a href="#update_participant_authentication"><CopyableCode code="update_participant_authentication" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-State"><code>State</code></a>, <a href="#parameter-InstanceId"><code>InstanceId</code></a></td>
    <td></td>
    <td>Instructs Amazon Connect to resume the authentication process. The subsequent actions depend on the request body contents: If a code is provided: Connect retrieves the identity information from Amazon Cognito and imports it into Connect Customer Profiles. If an error is provided: The error branch of the Authenticate Customer block is executed. The API returns a success response to acknowledge the request. However, the interaction and exchange of identity information occur asynchronously after the response is returned.</td>
</tr>
<tr>
    <td><a href="#delete_push_notification_registration"><CopyableCode code="delete_push_notification_registration" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-registration_id"><code>registration_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-contactId"><code>contactId</code></a></td>
    <td>Deletes registration for a device token and a chat contact.</td>
</tr>
<tr>
    <td><a href="#delete_instance"><CopyableCode code="delete_instance" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-clientToken"><code>clientToken</code></a></td>
    <td>This API is in preview release for Amazon Connect and is subject to change. Deletes the Amazon Connect instance. For more information, see Delete your Amazon Connect instance in the Amazon Connect Administrator Guide. Amazon Connect enforces a limit on the total number of instances that you can create or delete in 30 days. If you exceed this limit, you will get an error message indicating there has been an excessive number of attempts at creating or deleting instances. You must wait 30 days before you can restart creating and deleting instances in your account.</td>
</tr>
<tr>
    <td><a href="#disassociate_analytics_data_set"><CopyableCode code="disassociate_analytics_data_set" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DataSetId"><code>DataSetId</code></a></td>
    <td></td>
    <td>Removes the dataset ID associated with a given Amazon Connect instance.</td>
</tr>
<tr>
    <td><a href="#batch_associate_analytics_data_set"><CopyableCode code="batch_associate_analytics_data_set" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DataSetIds"><code>DataSetIds</code></a></td>
    <td></td>
    <td>Associates a list of analytics datasets for a given Amazon Connect instance to a target account. You can associate multiple datasets in a single call.</td>
</tr>
<tr>
    <td><a href="#batch_disassociate_analytics_data_set"><CopyableCode code="batch_disassociate_analytics_data_set" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DataSetIds"><code>DataSetIds</code></a></td>
    <td></td>
    <td>Removes a list of analytics datasets associated with a given Amazon Connect instance. You can disassociate multiple datasets in a single call.</td>
</tr>
<tr>
    <td><a href="#batch_put_contact"><CopyableCode code="batch_put_contact" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ContactDataRequestList"><code>ContactDataRequestList</code></a></td>
    <td></td>
    <td>Only the Amazon Connect outbound campaigns service principal is allowed to assume a role in your account and call this API. Allows you to create a batch of contacts in Amazon Connect. The outbound campaigns capability ingests dial requests via the PutDialRequestBatch API. It then uses BatchPutContact to create contacts corresponding to those dial requests. If agents are available, the dial requests are dialed out, which results in a voice call. The resulting voice call uses the same contactId that was created by BatchPutContact.</td>
</tr>
<tr>
    <td><a href="#complete_attached_file_upload"><CopyableCode code="complete_attached_file_upload" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-file_id"><code>file_id</code></a>, <a href="#parameter-associatedResourceArn"><code>associatedResourceArn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Allows you to confirm that the attached file has been uploaded using the pre-signed URL provided in the StartAttachedFileUpload API.</td>
</tr>
<tr>
    <td><a href="#dismiss_user_contact"><CopyableCode code="dismiss_user_contact" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-user_id"><code>user_id</code></a>, <a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ContactId"><code>ContactId</code></a></td>
    <td></td>
    <td>Dismisses contacts from an agent’s CCP and returns the agent to an available state, which allows the agent to receive a new routed contact. Contacts can only be dismissed if they are in a MISSED, ERROR, ENDED, or REJECTED state in the Agent Event Stream.</td>
</tr>
<tr>
    <td><a href="#import_phone_number"><CopyableCode code="import_phone_number" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-InstanceId"><code>InstanceId</code></a>, <a href="#parameter-SourcePhoneNumberArn"><code>SourcePhoneNumberArn</code></a></td>
    <td></td>
    <td>Imports a claimed phone number from an external service, such as Amazon Web Services End User Messaging, into an Amazon Connect instance. You can call this API only in the same Amazon Web Services Region where the Amazon Connect instance was created. Call the DescribePhoneNumber API to verify the status of a previous ImportPhoneNumber operation. If you plan to claim or import numbers and then release numbers frequently, contact us for a service quota exception. Otherwise, it is possible you will be blocked from claiming and releasing any more numbers until up to 180 days past the oldest number released has expired. By default you can claim or import and then release up to 200% of your maximum number of active phone numbers. If you claim or import and then release phone numbers using the UI or API during a rolling 180 day cycle that exceeds 200% of your phone number service level quota, you will be blocked from claiming or importing any more numbers until 180 days past the oldest number released has expired. For example, if you already have 99 claimed or imported numbers and a service level quota of 99 phone numbers, and in any 180 day period you release 99, claim 99, and then release 99, you will have exceeded the 200% limit. At that point you are blocked from claiming any more numbers until you open an Amazon Web Services Support ticket.</td>
</tr>
<tr>
    <td><a href="#monitor_contact"><CopyableCode code="monitor_contact" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-InstanceId"><code>InstanceId</code></a>, <a href="#parameter-ContactId"><code>ContactId</code></a>, <a href="#parameter-UserId"><code>UserId</code></a></td>
    <td></td>
    <td>Initiates silent monitoring of a contact. The Contact Control Panel (CCP) of the user specified by userId will be set to silent monitoring mode on the contact.</td>
</tr>
<tr>
    <td><a href="#pause_contact"><CopyableCode code="pause_contact" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ContactId"><code>ContactId</code></a>, <a href="#parameter-InstanceId"><code>InstanceId</code></a></td>
    <td></td>
    <td>Allows pausing an ongoing task contact.</td>
</tr>
<tr>
    <td><a href="#replicate_instance"><CopyableCode code="replicate_instance" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ReplicaRegion"><code>ReplicaRegion</code></a>, <a href="#parameter-ReplicaAlias"><code>ReplicaAlias</code></a></td>
    <td></td>
    <td>Replicates an Amazon Connect instance in the specified Amazon Web Services Region and copies configuration information for Amazon Connect resources across Amazon Web Services Regions. For more information about replicating an Amazon Connect instance, see Create a replica of your existing Amazon Connect instance in the Amazon Connect Administrator Guide.</td>
</tr>
<tr>
    <td><a href="#resume_contact"><CopyableCode code="resume_contact" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ContactId"><code>ContactId</code></a>, <a href="#parameter-InstanceId"><code>InstanceId</code></a></td>
    <td></td>
    <td>Allows resuming a task contact in a paused state.</td>
</tr>
<tr>
    <td><a href="#send_outbound_email"><CopyableCode code="send_outbound_email" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-FromEmailAddress"><code>FromEmailAddress</code></a>, <a href="#parameter-DestinationEmailAddress"><code>DestinationEmailAddress</code></a>, <a href="#parameter-EmailMessage"><code>EmailMessage</code></a>, <a href="#parameter-TrafficType"><code>TrafficType</code></a></td>
    <td></td>
    <td>Send outbound email for outbound campaigns. For more information about outbound campaigns, see Set up Amazon Connect outbound campaigns. Only the Amazon Connect outbound campaigns service principal is allowed to assume a role in your account and call this API.</td>
</tr>
<tr>
    <td><a href="#start_email_contact"><CopyableCode code="start_email_contact" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-InstanceId"><code>InstanceId</code></a>, <a href="#parameter-FromEmailAddress"><code>FromEmailAddress</code></a>, <a href="#parameter-DestinationEmailAddress"><code>DestinationEmailAddress</code></a>, <a href="#parameter-EmailMessage"><code>EmailMessage</code></a></td>
    <td></td>
    <td>Creates an inbound email contact and initiates a flow to start the email contact for the customer. Response of this API provides the ContactId of the email contact created.</td>
</tr>
<tr>
    <td><a href="#start_outbound_email_contact"><CopyableCode code="start_outbound_email_contact" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-InstanceId"><code>InstanceId</code></a>, <a href="#parameter-ContactId"><code>ContactId</code></a>, <a href="#parameter-DestinationEmailAddress"><code>DestinationEmailAddress</code></a>, <a href="#parameter-EmailMessage"><code>EmailMessage</code></a></td>
    <td></td>
    <td>Initiates a flow to send an agent reply or outbound email contact (created from the CreateContact API) to a customer.</td>
</tr>
<tr>
    <td><a href="#start_screen_sharing"><CopyableCode code="start_screen_sharing" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-InstanceId"><code>InstanceId</code></a>, <a href="#parameter-ContactId"><code>ContactId</code></a></td>
    <td></td>
    <td>Starts screen sharing for a contact. For more information about screen sharing, see Set up in-app, web, video calling, and screen sharing capabilities in the Amazon Connect Administrator Guide.</td>
</tr>
<tr>
    <td><a href="#start_task_contact"><CopyableCode code="start_task_contact" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-InstanceId"><code>InstanceId</code></a>, <a href="#parameter-Name"><code>Name</code></a></td>
    <td></td>
    <td>Initiates a flow to start a new task contact. For more information about task contacts, see Concepts: Tasks in Amazon Connect in the Amazon Connect Administrator Guide. When using PreviousContactId and RelatedContactId input parameters, note the following: PreviousContactId Any updates to user-defined task contact attributes on any contact linked through the same PreviousContactId will affect every contact in the chain. There can be a maximum of 12 linked task contacts in a chain. That is, 12 task contacts can be created that share the same PreviousContactId. RelatedContactId Copies contact attributes from the related task contact to the new contact. Any update on attributes in a new task contact does not update attributes on previous contact. There’s no limit on the number of task contacts that can be created that use the same RelatedContactId. In addition, when calling StartTaskContact include only one of these parameters: ContactFlowID, QuickConnectID, or TaskTemplateID. Only one parameter is required as long as the task template has a flow configured to run it. If more than one parameter is specified, or only the TaskTemplateID is specified but it does not have a flow configured, the request returns an error because Amazon Connect cannot identify the unique flow to run when the task is created. A ServiceQuotaExceededException occurs when the number of open tasks exceeds the active tasks quota or there are already 12 tasks referencing the same PreviousContactId. For more information about service quotas for task contacts, see Amazon Connect service quotas in the Amazon Connect Administrator Guide.</td>
</tr>
<tr>
    <td><a href="#stop_contact"><CopyableCode code="stop_contact" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ContactId"><code>ContactId</code></a>, <a href="#parameter-InstanceId"><code>InstanceId</code></a></td>
    <td></td>
    <td>Ends the specified contact. Use this API to stop queued callbacks. It does not work for voice contacts that use the following initiation methods: DISCONNECT TRANSFER QUEUE_TRANSFER EXTERNAL_OUTBOUND MONITOR Chat and task contacts can be terminated in any state, regardless of initiation method.</td>
</tr>
<tr>
    <td><a href="#suspend_contact_recording"><CopyableCode code="suspend_contact_recording" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-InstanceId"><code>InstanceId</code></a>, <a href="#parameter-ContactId"><code>ContactId</code></a>, <a href="#parameter-InitialContactId"><code>InitialContactId</code></a></td>
    <td></td>
    <td>When a contact is being recorded, this API suspends recording whatever is selected in the flow configuration: call (IVR or agent), screen, or both. If only call recording or only screen recording is enabled, then it would be suspended. For example, you might suspend the screen recording while collecting sensitive information, such as a credit card number. Then use ResumeContactRecording to restart recording the screen. The period of time that the recording is suspended is filled with silence in the final recording. Voice (IVR, agent) and screen recordings are supported.</td>
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
<tr id="parameter-associatedResourceArn">
    <td><CopyableCode code="associatedResourceArn" /></td>
    <td><code>string</code></td>
    <td>The resource to which the attached file is (being) uploaded to. The supported resources are Cases and Email. This value must be a valid ARN.</td>
</tr>
<tr id="parameter-contact_id">
    <td><CopyableCode code="contact_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the contact in this instance of Amazon Connect.</td>
</tr>
<tr id="parameter-file_id">
    <td><CopyableCode code="file_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the attached file resource.</td>
</tr>
<tr id="parameter-initial_contact_id">
    <td><CopyableCode code="initial_contact_id" /></td>
    <td><code>string</code></td>
    <td>This is the contactId of the current contact that the CreatePersistentContactAssociation API is being called from.</td>
</tr>
<tr id="parameter-instance_id">
    <td><CopyableCode code="instance_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-registration_id">
    <td><CopyableCode code="registration_id" /></td>
    <td><code>string</code></td>
    <td>The identifier for the registration.</td>
</tr>
<tr id="parameter-resource_id">
    <td><CopyableCode code="resource_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the resource. Amazon Web Services End User Messaging SMS phone number ARN when using SMS_PHONE_NUMBER Amazon Web Services End User Messaging Social phone number ARN when using WHATSAPP_MESSAGING_PHONE_NUMBER</td>
</tr>
<tr id="parameter-resource_type">
    <td><CopyableCode code="resource_type" /></td>
    <td><code>string</code></td>
    <td>A valid resource type.</td>
</tr>
<tr id="parameter-user_id">
    <td><CopyableCode code="user_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the user account.</td>
</tr>
<tr id="parameter-clientToken">
    <td><CopyableCode code="clientToken" /></td>
    <td><code>string</code></td>
    <td>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see Making retries safe with idempotent APIs.</td>
</tr>
<tr id="parameter-contactId">
    <td><CopyableCode code="contactId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the contact within the Amazon Connect instance.</td>
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
    defaultValue="describe_instance"
    values={[
        { label: 'describe_instance', value: 'describe_instance' },
        { label: 'list_instances', value: 'list_instances' }
    ]}
>
<TabItem value="describe_instance">

This API is in preview release for Amazon Connect and is subject to change. Returns the current state of the specified instance identifier. It tracks the instance while it is being created and returns an error status, if applicable. If an instance is not created successfully, the instance status reason field returns details relevant to the reason. The instance in a failed state is returned only for 24 hours after the CreateInstance API was invoked.

```sql
SELECT
instance,
replication_configuration
FROM aws.connect.instances
WHERE instance_id = '{{ instance_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_instances">

This API is in preview release for Amazon Connect and is subject to change. Return a list of instances which are in active state, creation-in-progress state, and failed state. Instances that aren't successfully created (they are in a failed state) are returned only for 24 hours after the CreateInstance API was invoked.

```sql
SELECT
arn,
created_time,
id,
identity_management_type,
inbound_calls_enabled,
instance_access_url,
instance_alias,
instance_status,
outbound_calls_enabled,
service_role
FROM aws.connect.instances
WHERE region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_push_notification_registration"
    values={[
        { label: 'create_push_notification_registration', value: 'create_push_notification_registration' },
        { label: 'create_persistent_contact_association', value: 'create_persistent_contact_association' },
        { label: 'create_instance', value: 'create_instance' },
        { label: 'create_participant', value: 'create_participant' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_push_notification_registration">

Creates registration for a device token and a chat contact to receive real-time push notifications. For more information about push notifications, see Set up push notifications in Amazon Connect for mobile chat in the Amazon Connect Administrator Guide.

```sql
INSERT INTO aws.connect.instances (
ClientToken,
PinpointAppArn,
DeviceToken,
DeviceType,
ContactConfiguration,
instance_id,
region
)
SELECT 
'{{ ClientToken }}',
'{{ PinpointAppArn }}' /* required */,
'{{ DeviceToken }}' /* required */,
'{{ DeviceType }}' /* required */,
'{{ ContactConfiguration }}' /* required */,
'{{ instance_id }}',
'{{ region }}'
RETURNING
registration_id
;
```
</TabItem>
<TabItem value="create_persistent_contact_association">

Enables rehydration of chats for the lifespan of a contact. For more information about chat rehydration, see Enable persistent chat in the Amazon Connect Administrator Guide.

```sql
INSERT INTO aws.connect.instances (
RehydrationType,
SourceContactId,
ClientToken,
instance_id,
initial_contact_id,
region
)
SELECT 
'{{ RehydrationType }}' /* required */,
'{{ SourceContactId }}' /* required */,
'{{ ClientToken }}',
'{{ instance_id }}',
'{{ initial_contact_id }}',
'{{ region }}'
RETURNING
continued_from_contact_id
;
```
</TabItem>
<TabItem value="create_instance">

This API is in preview release for Amazon Connect and is subject to change. Initiates an Amazon Connect instance with all the supported channels enabled. It does not attach any storage, such as Amazon Simple Storage Service (Amazon S3) or Amazon Kinesis. It also does not allow for any configurations on features, such as Contact Lens for Amazon Connect. For more information, see Create an Amazon Connect instance in the Amazon Connect Administrator Guide. Amazon Connect enforces a limit on the total number of instances that you can create or delete in 30 days. If you exceed this limit, you will get an error message indicating there has been an excessive number of attempts at creating or deleting instances. You must wait 30 days before you can restart creating and deleting instances in your account.

```sql
INSERT INTO aws.connect.instances (
ClientToken,
IdentityManagementType,
InstanceAlias,
DirectoryId,
InboundCallsEnabled,
OutboundCallsEnabled,
Tags,
region
)
SELECT 
'{{ ClientToken }}',
'{{ IdentityManagementType }}' /* required */,
'{{ InstanceAlias }}',
'{{ DirectoryId }}',
{{ InboundCallsEnabled }} /* required */,
{{ OutboundCallsEnabled }} /* required */,
'{{ Tags }}',
'{{ region }}'
RETURNING
arn,
id
;
```
</TabItem>
<TabItem value="create_participant">

Adds a new participant into an on-going chat contact or webRTC call. For more information, see Customize chat flow experiences by integrating custom participants or Enable multi-user web, in-app, and video calling.

```sql
INSERT INTO aws.connect.instances (
InstanceId,
ContactId,
ClientToken,
ParticipantDetails,
region
)
SELECT 
'{{ InstanceId }}' /* required */,
'{{ ContactId }}' /* required */,
'{{ ClientToken }}',
'{{ ParticipantDetails }}' /* required */,
'{{ region }}'
RETURNING
participant_credentials,
participant_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: instances
  props:
    - name: instance_id
      value: "{{ instance_id }}"
      description: Required parameter for the instances resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the instances resource.
    - name: initial_contact_id
      value: "{{ initial_contact_id }}"
      description: Required parameter for the instances resource.
    - name: ClientToken
      value: "{{ ClientToken }}"
    - name: PinpointAppArn
      value: "{{ PinpointAppArn }}"
    - name: DeviceToken
      value: "{{ DeviceToken }}"
    - name: DeviceType
      value: "{{ DeviceType }}"
      valid_values: ['GCM', 'APNS', 'APNS_SANDBOX']
    - name: ContactConfiguration
      description: |
        The contact configuration for push notification registration.
      value:
        ContactId: "{{ ContactId }}"
        ParticipantRole: "{{ ParticipantRole }}"
        IncludeRawMessage: {{ IncludeRawMessage }}
    - name: RehydrationType
      value: "{{ RehydrationType }}"
      valid_values: ['ENTIRE_PAST_SESSION', 'FROM_SEGMENT']
    - name: SourceContactId
      value: "{{ SourceContactId }}"
    - name: IdentityManagementType
      value: "{{ IdentityManagementType }}"
      valid_values: ['SAML', 'CONNECT_MANAGED', 'EXISTING_DIRECTORY']
    - name: InstanceAlias
      value: "{{ InstanceAlias }}"
    - name: DirectoryId
      value: "{{ DirectoryId }}"
    - name: InboundCallsEnabled
      value: {{ InboundCallsEnabled }}
    - name: OutboundCallsEnabled
      value: {{ OutboundCallsEnabled }}
    - name: Tags
      value: "{{ Tags }}"
    - name: InstanceId
      value: "{{ InstanceId }}"
    - name: ContactId
      value: "{{ ContactId }}"
    - name: ParticipantDetails
      description: |
        The details to add for the participant.
      value:
        ParticipantRole: "{{ ParticipantRole }}"
        DisplayName: "{{ DisplayName }}"
        ParticipantCapabilities:
          Video: "{{ Video }}"
          ScreenShare: "{{ ScreenShare }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="associate_flow"
    values={[
        { label: 'associate_flow', value: 'associate_flow' },
        { label: 'disassociate_flow', value: 'disassociate_flow' },
        { label: 'update_participant_role_config', value: 'update_participant_role_config' },
        { label: 'associate_analytics_data_set', value: 'associate_analytics_data_set' },
        { label: 'update_participant_authentication', value: 'update_participant_authentication' }
    ]}
>
<TabItem value="associate_flow">

Associates a connect resource to a flow.

```sql
UPDATE aws.connect.instances
SET 
ResourceId = '{{ ResourceId }}',
FlowId = '{{ FlowId }}',
ResourceType = '{{ ResourceType }}'
WHERE 
instance_id = '{{ instance_id }}' --required
AND region = '{{ region }}' --required
AND ResourceId = '{{ ResourceId }}' --required
AND FlowId = '{{ FlowId }}' --required
AND ResourceType = '{{ ResourceType }}' --required;
```
</TabItem>
<TabItem value="disassociate_flow">

Disassociates a connect resource from a flow.

```sql
UPDATE aws.connect.instances
SET 
-- No updatable properties
WHERE 
instance_id = '{{ instance_id }}' --required
AND resource_id = '{{ resource_id }}' --required
AND resource_type = '{{ resource_type }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
<TabItem value="update_participant_role_config">

Updates timeouts for when human chat participants are to be considered idle, and when agents are automatically disconnected from a chat due to idleness. You can set four timers: Customer idle timeout Customer auto-disconnect timeout Agent idle timeout Agent auto-disconnect timeout For more information about how chat timeouts work, see Set up chat timeouts for human participants.

```sql
UPDATE aws.connect.instances
SET 
ChannelConfiguration = '{{ ChannelConfiguration }}'
WHERE 
instance_id = '{{ instance_id }}' --required
AND contact_id = '{{ contact_id }}' --required
AND region = '{{ region }}' --required
AND ChannelConfiguration = '{{ ChannelConfiguration }}' --required;
```
</TabItem>
<TabItem value="associate_analytics_data_set">

Associates the specified dataset for a Amazon Connect instance with the target account. You can associate only one dataset in a single call.

```sql
UPDATE aws.connect.instances
SET 
DataSetId = '{{ DataSetId }}',
TargetAccountId = '{{ TargetAccountId }}'
WHERE 
instance_id = '{{ instance_id }}' --required
AND region = '{{ region }}' --required
AND DataSetId = '{{ DataSetId }}' --required
RETURNING
data_set_id,
resource_share_arn,
resource_share_id,
target_account_id;
```
</TabItem>
<TabItem value="update_participant_authentication">

Instructs Amazon Connect to resume the authentication process. The subsequent actions depend on the request body contents: If a code is provided: Connect retrieves the identity information from Amazon Cognito and imports it into Connect Customer Profiles. If an error is provided: The error branch of the Authenticate Customer block is executed. The API returns a success response to acknowledge the request. However, the interaction and exchange of identity information occur asynchronously after the response is returned.

```sql
UPDATE aws.connect.instances
SET 
State = '{{ State }}',
InstanceId = '{{ InstanceId }}',
Code = '{{ Code }}',
Error = '{{ Error }}',
ErrorDescription = '{{ ErrorDescription }}'
WHERE 
region = '{{ region }}' --required
AND State = '{{ State }}' --required
AND InstanceId = '{{ InstanceId }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_push_notification_registration"
    values={[
        { label: 'delete_push_notification_registration', value: 'delete_push_notification_registration' },
        { label: 'delete_instance', value: 'delete_instance' }
    ]}
>
<TabItem value="delete_push_notification_registration">

Deletes registration for a device token and a chat contact.

```sql
DELETE FROM aws.connect.instances
WHERE instance_id = '{{ instance_id }}' --required
AND registration_id = '{{ registration_id }}' --required
AND region = '{{ region }}' --required
AND contactId = '{{ contactId }}'
;
```
</TabItem>
<TabItem value="delete_instance">

This API is in preview release for Amazon Connect and is subject to change. Deletes the Amazon Connect instance. For more information, see Delete your Amazon Connect instance in the Amazon Connect Administrator Guide. Amazon Connect enforces a limit on the total number of instances that you can create or delete in 30 days. If you exceed this limit, you will get an error message indicating there has been an excessive number of attempts at creating or deleting instances. You must wait 30 days before you can restart creating and deleting instances in your account.

```sql
DELETE FROM aws.connect.instances
WHERE instance_id = '{{ instance_id }}' --required
AND region = '{{ region }}' --required
AND clientToken = '{{ clientToken }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="disassociate_analytics_data_set"
    values={[
        { label: 'disassociate_analytics_data_set', value: 'disassociate_analytics_data_set' },
        { label: 'batch_associate_analytics_data_set', value: 'batch_associate_analytics_data_set' },
        { label: 'batch_disassociate_analytics_data_set', value: 'batch_disassociate_analytics_data_set' },
        { label: 'batch_put_contact', value: 'batch_put_contact' },
        { label: 'complete_attached_file_upload', value: 'complete_attached_file_upload' },
        { label: 'dismiss_user_contact', value: 'dismiss_user_contact' },
        { label: 'import_phone_number', value: 'import_phone_number' },
        { label: 'monitor_contact', value: 'monitor_contact' },
        { label: 'pause_contact', value: 'pause_contact' },
        { label: 'replicate_instance', value: 'replicate_instance' },
        { label: 'resume_contact', value: 'resume_contact' },
        { label: 'send_outbound_email', value: 'send_outbound_email' },
        { label: 'start_email_contact', value: 'start_email_contact' },
        { label: 'start_outbound_email_contact', value: 'start_outbound_email_contact' },
        { label: 'start_screen_sharing', value: 'start_screen_sharing' },
        { label: 'start_task_contact', value: 'start_task_contact' },
        { label: 'stop_contact', value: 'stop_contact' },
        { label: 'suspend_contact_recording', value: 'suspend_contact_recording' }
    ]}
>
<TabItem value="disassociate_analytics_data_set">

Removes the dataset ID associated with a given Amazon Connect instance.

```sql
EXEC aws.connect.instances.disassociate_analytics_data_set 
@instance_id='{{ instance_id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"DataSetId": "{{ DataSetId }}", 
"TargetAccountId": "{{ TargetAccountId }}"
}'
;
```
</TabItem>
<TabItem value="batch_associate_analytics_data_set">

Associates a list of analytics datasets for a given Amazon Connect instance to a target account. You can associate multiple datasets in a single call.

```sql
EXEC aws.connect.instances.batch_associate_analytics_data_set 
@instance_id='{{ instance_id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"DataSetIds": "{{ DataSetIds }}", 
"TargetAccountId": "{{ TargetAccountId }}"
}'
;
```
</TabItem>
<TabItem value="batch_disassociate_analytics_data_set">

Removes a list of analytics datasets associated with a given Amazon Connect instance. You can disassociate multiple datasets in a single call.

```sql
EXEC aws.connect.instances.batch_disassociate_analytics_data_set 
@instance_id='{{ instance_id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"DataSetIds": "{{ DataSetIds }}", 
"TargetAccountId": "{{ TargetAccountId }}"
}'
;
```
</TabItem>
<TabItem value="batch_put_contact">

Only the Amazon Connect outbound campaigns service principal is allowed to assume a role in your account and call this API. Allows you to create a batch of contacts in Amazon Connect. The outbound campaigns capability ingests dial requests via the PutDialRequestBatch API. It then uses BatchPutContact to create contacts corresponding to those dial requests. If agents are available, the dial requests are dialed out, which results in a voice call. The resulting voice call uses the same contactId that was created by BatchPutContact.

```sql
EXEC aws.connect.instances.batch_put_contact 
@instance_id='{{ instance_id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"ClientToken": "{{ ClientToken }}", 
"ContactDataRequestList": "{{ ContactDataRequestList }}"
}'
;
```
</TabItem>
<TabItem value="complete_attached_file_upload">

Allows you to confirm that the attached file has been uploaded using the pre-signed URL provided in the StartAttachedFileUpload API.

```sql
EXEC aws.connect.instances.complete_attached_file_upload 
@instance_id='{{ instance_id }}' --required, 
@file_id='{{ file_id }}' --required, 
@associatedResourceArn='{{ associatedResourceArn }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
<TabItem value="dismiss_user_contact">

Dismisses contacts from an agent’s CCP and returns the agent to an available state, which allows the agent to receive a new routed contact. Contacts can only be dismissed if they are in a MISSED, ERROR, ENDED, or REJECTED state in the Agent Event Stream.

```sql
EXEC aws.connect.instances.dismiss_user_contact 
@user_id='{{ user_id }}' --required, 
@instance_id='{{ instance_id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"ContactId": "{{ ContactId }}"
}'
;
```
</TabItem>
<TabItem value="import_phone_number">

Imports a claimed phone number from an external service, such as Amazon Web Services End User Messaging, into an Amazon Connect instance. You can call this API only in the same Amazon Web Services Region where the Amazon Connect instance was created. Call the DescribePhoneNumber API to verify the status of a previous ImportPhoneNumber operation. If you plan to claim or import numbers and then release numbers frequently, contact us for a service quota exception. Otherwise, it is possible you will be blocked from claiming and releasing any more numbers until up to 180 days past the oldest number released has expired. By default you can claim or import and then release up to 200% of your maximum number of active phone numbers. If you claim or import and then release phone numbers using the UI or API during a rolling 180 day cycle that exceeds 200% of your phone number service level quota, you will be blocked from claiming or importing any more numbers until 180 days past the oldest number released has expired. For example, if you already have 99 claimed or imported numbers and a service level quota of 99 phone numbers, and in any 180 day period you release 99, claim 99, and then release 99, you will have exceeded the 200% limit. At that point you are blocked from claiming any more numbers until you open an Amazon Web Services Support ticket.

```sql
EXEC aws.connect.instances.import_phone_number 
@region='{{ region }}' --required 
@@json=
'{
"InstanceId": "{{ InstanceId }}", 
"SourcePhoneNumberArn": "{{ SourcePhoneNumberArn }}", 
"PhoneNumberDescription": "{{ PhoneNumberDescription }}", 
"Tags": "{{ Tags }}", 
"ClientToken": "{{ ClientToken }}"
}'
;
```
</TabItem>
<TabItem value="monitor_contact">

Initiates silent monitoring of a contact. The Contact Control Panel (CCP) of the user specified by userId will be set to silent monitoring mode on the contact.

```sql
EXEC aws.connect.instances.monitor_contact 
@region='{{ region }}' --required 
@@json=
'{
"InstanceId": "{{ InstanceId }}", 
"ContactId": "{{ ContactId }}", 
"UserId": "{{ UserId }}", 
"AllowedMonitorCapabilities": "{{ AllowedMonitorCapabilities }}", 
"ClientToken": "{{ ClientToken }}"
}'
;
```
</TabItem>
<TabItem value="pause_contact">

Allows pausing an ongoing task contact.

```sql
EXEC aws.connect.instances.pause_contact 
@region='{{ region }}' --required 
@@json=
'{
"ContactId": "{{ ContactId }}", 
"InstanceId": "{{ InstanceId }}", 
"ContactFlowId": "{{ ContactFlowId }}"
}'
;
```
</TabItem>
<TabItem value="replicate_instance">

Replicates an Amazon Connect instance in the specified Amazon Web Services Region and copies configuration information for Amazon Connect resources across Amazon Web Services Regions. For more information about replicating an Amazon Connect instance, see Create a replica of your existing Amazon Connect instance in the Amazon Connect Administrator Guide.

```sql
EXEC aws.connect.instances.replicate_instance 
@instance_id='{{ instance_id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"ReplicaRegion": "{{ ReplicaRegion }}", 
"ClientToken": "{{ ClientToken }}", 
"ReplicaAlias": "{{ ReplicaAlias }}"
}'
;
```
</TabItem>
<TabItem value="resume_contact">

Allows resuming a task contact in a paused state.

```sql
EXEC aws.connect.instances.resume_contact 
@region='{{ region }}' --required 
@@json=
'{
"ContactId": "{{ ContactId }}", 
"InstanceId": "{{ InstanceId }}", 
"ContactFlowId": "{{ ContactFlowId }}"
}'
;
```
</TabItem>
<TabItem value="send_outbound_email">

Send outbound email for outbound campaigns. For more information about outbound campaigns, see Set up Amazon Connect outbound campaigns. Only the Amazon Connect outbound campaigns service principal is allowed to assume a role in your account and call this API.

```sql
EXEC aws.connect.instances.send_outbound_email 
@instance_id='{{ instance_id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"FromEmailAddress": "{{ FromEmailAddress }}", 
"DestinationEmailAddress": "{{ DestinationEmailAddress }}", 
"AdditionalRecipients": "{{ AdditionalRecipients }}", 
"EmailMessage": "{{ EmailMessage }}", 
"TrafficType": "{{ TrafficType }}", 
"SourceCampaign": "{{ SourceCampaign }}", 
"ClientToken": "{{ ClientToken }}"
}'
;
```
</TabItem>
<TabItem value="start_email_contact">

Creates an inbound email contact and initiates a flow to start the email contact for the customer. Response of this API provides the ContactId of the email contact created.

```sql
EXEC aws.connect.instances.start_email_contact 
@region='{{ region }}' --required 
@@json=
'{
"InstanceId": "{{ InstanceId }}", 
"FromEmailAddress": "{{ FromEmailAddress }}", 
"DestinationEmailAddress": "{{ DestinationEmailAddress }}", 
"Description": "{{ Description }}", 
"References": "{{ References }}", 
"Name": "{{ Name }}", 
"EmailMessage": "{{ EmailMessage }}", 
"AdditionalRecipients": "{{ AdditionalRecipients }}", 
"Attachments": "{{ Attachments }}", 
"ContactFlowId": "{{ ContactFlowId }}", 
"RelatedContactId": "{{ RelatedContactId }}", 
"Attributes": "{{ Attributes }}", 
"SegmentAttributes": "{{ SegmentAttributes }}", 
"ClientToken": "{{ ClientToken }}"
}'
;
```
</TabItem>
<TabItem value="start_outbound_email_contact">

Initiates a flow to send an agent reply or outbound email contact (created from the CreateContact API) to a customer.

```sql
EXEC aws.connect.instances.start_outbound_email_contact 
@region='{{ region }}' --required 
@@json=
'{
"InstanceId": "{{ InstanceId }}", 
"ContactId": "{{ ContactId }}", 
"FromEmailAddress": "{{ FromEmailAddress }}", 
"DestinationEmailAddress": "{{ DestinationEmailAddress }}", 
"AdditionalRecipients": "{{ AdditionalRecipients }}", 
"EmailMessage": "{{ EmailMessage }}", 
"ClientToken": "{{ ClientToken }}"
}'
;
```
</TabItem>
<TabItem value="start_screen_sharing">

Starts screen sharing for a contact. For more information about screen sharing, see Set up in-app, web, video calling, and screen sharing capabilities in the Amazon Connect Administrator Guide.

```sql
EXEC aws.connect.instances.start_screen_sharing 
@region='{{ region }}' --required 
@@json=
'{
"ClientToken": "{{ ClientToken }}", 
"InstanceId": "{{ InstanceId }}", 
"ContactId": "{{ ContactId }}"
}'
;
```
</TabItem>
<TabItem value="start_task_contact">

Initiates a flow to start a new task contact. For more information about task contacts, see Concepts: Tasks in Amazon Connect in the Amazon Connect Administrator Guide. When using PreviousContactId and RelatedContactId input parameters, note the following: PreviousContactId Any updates to user-defined task contact attributes on any contact linked through the same PreviousContactId will affect every contact in the chain. There can be a maximum of 12 linked task contacts in a chain. That is, 12 task contacts can be created that share the same PreviousContactId. RelatedContactId Copies contact attributes from the related task contact to the new contact. Any update on attributes in a new task contact does not update attributes on previous contact. There’s no limit on the number of task contacts that can be created that use the same RelatedContactId. In addition, when calling StartTaskContact include only one of these parameters: ContactFlowID, QuickConnectID, or TaskTemplateID. Only one parameter is required as long as the task template has a flow configured to run it. If more than one parameter is specified, or only the TaskTemplateID is specified but it does not have a flow configured, the request returns an error because Amazon Connect cannot identify the unique flow to run when the task is created. A ServiceQuotaExceededException occurs when the number of open tasks exceeds the active tasks quota or there are already 12 tasks referencing the same PreviousContactId. For more information about service quotas for task contacts, see Amazon Connect service quotas in the Amazon Connect Administrator Guide.

```sql
EXEC aws.connect.instances.start_task_contact 
@region='{{ region }}' --required 
@@json=
'{
"InstanceId": "{{ InstanceId }}", 
"PreviousContactId": "{{ PreviousContactId }}", 
"ContactFlowId": "{{ ContactFlowId }}", 
"Attributes": "{{ Attributes }}", 
"Name": "{{ Name }}", 
"References": "{{ References }}", 
"Description": "{{ Description }}", 
"ClientToken": "{{ ClientToken }}", 
"ScheduledTime": "{{ ScheduledTime }}", 
"TaskTemplateId": "{{ TaskTemplateId }}", 
"QuickConnectId": "{{ QuickConnectId }}", 
"RelatedContactId": "{{ RelatedContactId }}", 
"SegmentAttributes": "{{ SegmentAttributes }}", 
"Attachments": "{{ Attachments }}"
}'
;
```
</TabItem>
<TabItem value="stop_contact">

Ends the specified contact. Use this API to stop queued callbacks. It does not work for voice contacts that use the following initiation methods: DISCONNECT TRANSFER QUEUE_TRANSFER EXTERNAL_OUTBOUND MONITOR Chat and task contacts can be terminated in any state, regardless of initiation method.

```sql
EXEC aws.connect.instances.stop_contact 
@region='{{ region }}' --required 
@@json=
'{
"ContactId": "{{ ContactId }}", 
"InstanceId": "{{ InstanceId }}", 
"DisconnectReason": "{{ DisconnectReason }}"
}'
;
```
</TabItem>
<TabItem value="suspend_contact_recording">

When a contact is being recorded, this API suspends recording whatever is selected in the flow configuration: call (IVR or agent), screen, or both. If only call recording or only screen recording is enabled, then it would be suspended. For example, you might suspend the screen recording while collecting sensitive information, such as a credit card number. Then use ResumeContactRecording to restart recording the screen. The period of time that the recording is suspended is filled with silence in the final recording. Voice (IVR, agent) and screen recordings are supported.

```sql
EXEC aws.connect.instances.suspend_contact_recording 
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
</Tabs>
