--- 
title: flows
hide_title: false
hide_table_of_contents: false
keywords:
  - flows
  - mediaconnect
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

Creates, updates, deletes, gets or lists a <code>flows</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="flows" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.mediaconnect.flows" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_flow"
    values={[
        { label: 'describe_flow', value: 'describe_flow' },
        { label: 'list_flows', value: 'list_flows' }
    ]}
>
<TabItem value="describe_flow">

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
    <td><CopyableCode code="Flow" /></td>
    <td><code>object</code></td>
    <td>The flow that you requested a description of.</td>
</tr>
<tr>
    <td><CopyableCode code="Messages" /></td>
    <td><code>object</code></td>
    <td>Any errors that apply currently to the flow. If there are no errors, MediaConnect will not include this field in the response.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_flows">

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
    <td><CopyableCode code="AvailabilityZone" /></td>
    <td><code>string</code></td>
    <td>The Availability Zone that the flow was created in.</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>A description of the flow.</td>
</tr>
<tr>
    <td><CopyableCode code="FlowArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the flow.</td>
</tr>
<tr>
    <td><CopyableCode code="Maintenance" /></td>
    <td><code>object</code></td>
    <td>The maintenance settings for the flow.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of the flow.</td>
</tr>
<tr>
    <td><CopyableCode code="SourceType" /></td>
    <td><code>string</code></td>
    <td>The type of source. This value is either owned (originated somewhere other than an MediaConnect flow owned by another Amazon Web Services account) or entitled (originated at a MediaConnect flow owned by another Amazon Web Services account). (OWNED, ENTITLED)</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The current status of the flow. (STANDBY, ACTIVE, UPDATING, DELETING, STARTING, STOPPING, ERROR)</td>
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
    <td><a href="#describe_flow"><CopyableCode code="describe_flow" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-flow_arn"><code>flow_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Displays the details of a flow. The response includes the flow Amazon Resource Name (ARN), name, and Availability Zone, as well as details about the source, outputs, and entitlements.</td>
</tr>
<tr>
    <td><a href="#list_flows"><CopyableCode code="list_flows" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Displays a list of flows that are associated with this account. This request returns a paginated result.</td>
</tr>
<tr>
    <td><a href="#create_flow"><CopyableCode code="create_flow" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates a new flow. The request must include one source. The request optionally can include outputs (up to 50) and entitlements (up to 50).</td>
</tr>
<tr>
    <td><a href="#add_flow_media_streams"><CopyableCode code="add_flow_media_streams" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-flow_arn"><code>flow_arn</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-MediaStreams"><code>MediaStreams</code></a></td>
    <td></td>
    <td>Adds media streams to an existing flow. After you add a media stream to a flow, you can associate it with a source and/or an output that uses the ST 2110 JPEG XS or CDI protocol.</td>
</tr>
<tr>
    <td><a href="#add_flow_vpc_interfaces"><CopyableCode code="add_flow_vpc_interfaces" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-flow_arn"><code>flow_arn</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-VpcInterfaces"><code>VpcInterfaces</code></a></td>
    <td></td>
    <td>Adds VPC interfaces to a flow.</td>
</tr>
<tr>
    <td><a href="#remove_flow_media_stream"><CopyableCode code="remove_flow_media_stream" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-flow_arn"><code>flow_arn</code></a>, <a href="#parameter-media_stream_name"><code>media_stream_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Removes a media stream from a flow. This action is only available if the media stream is not associated with a source or output.</td>
</tr>
<tr>
    <td><a href="#remove_flow_output"><CopyableCode code="remove_flow_output" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-flow_arn"><code>flow_arn</code></a>, <a href="#parameter-output_arn"><code>output_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Removes an output from an existing flow. This request can be made only on an output that does not have an entitlement associated with it. If the output has an entitlement, you must revoke the entitlement instead. When an entitlement is revoked from a flow, the service automatically removes the associated output.</td>
</tr>
<tr>
    <td><a href="#remove_flow_source"><CopyableCode code="remove_flow_source" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-flow_arn"><code>flow_arn</code></a>, <a href="#parameter-source_arn"><code>source_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Removes a source from an existing flow. This request can be made only if there is more than one source on the flow.</td>
</tr>
<tr>
    <td><a href="#remove_flow_vpc_interface"><CopyableCode code="remove_flow_vpc_interface" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-flow_arn"><code>flow_arn</code></a>, <a href="#parameter-vpc_interface_name"><code>vpc_interface_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Removes a VPC Interface from an existing flow. This request can be made only on a VPC interface that does not have a Source or Output associated with it. If the VPC interface is referenced by a Source or Output, you must first delete or update the Source or Output to no longer reference the VPC interface.</td>
</tr>
<tr>
    <td><a href="#update_flow"><CopyableCode code="update_flow" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-flow_arn"><code>flow_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates an existing flow. Because UpdateFlowSources and UpdateFlow are separate operations, you can't change both the source type AND the flow size in a single request. If you have a MEDIUM flow and you want to change the flow source to NDI®: First, use the UpdateFlow operation to upgrade the flow size to LARGE. After that, you can then use the UpdateFlowSource operation to configure the NDI source. If you're switching from an NDI source to a transport stream (TS) source and want to downgrade the flow size: First, use the UpdateFlowSource operation to change the flow source type. After that, you can then use the UpdateFlow operation to downgrade the flow size to MEDIUM.</td>
</tr>
<tr>
    <td><a href="#delete_flow"><CopyableCode code="delete_flow" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-flow_arn"><code>flow_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a flow. Before you can delete a flow, you must stop the flow.</td>
</tr>
<tr>
    <td><a href="#add_flow_outputs"><CopyableCode code="add_flow_outputs" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-flow_arn"><code>flow_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Adds outputs to an existing flow. You can create up to 50 outputs per flow.</td>
</tr>
<tr>
    <td><a href="#add_flow_sources"><CopyableCode code="add_flow_sources" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-flow_arn"><code>flow_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Adds sources to a flow.</td>
</tr>
<tr>
    <td><a href="#update_flow_media_stream"><CopyableCode code="update_flow_media_stream" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-flow_arn"><code>flow_arn</code></a>, <a href="#parameter-media_stream_name"><code>media_stream_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates an existing media stream.</td>
</tr>
<tr>
    <td><a href="#update_flow_output"><CopyableCode code="update_flow_output" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-flow_arn"><code>flow_arn</code></a>, <a href="#parameter-output_arn"><code>output_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates an existing flow output.</td>
</tr>
<tr>
    <td><a href="#update_flow_source"><CopyableCode code="update_flow_source" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-flow_arn"><code>flow_arn</code></a>, <a href="#parameter-source_arn"><code>source_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates the source of a flow. Because UpdateFlowSources and UpdateFlow are separate operations, you can't change both the source type AND the flow size in a single request. If you have a MEDIUM flow and you want to change the flow source to NDI®: First, use the UpdateFlow operation to upgrade the flow size to LARGE. After that, you can then use the UpdateFlowSource operation to configure the NDI source. If you're switching from an NDI source to a transport stream (TS) source and want to downgrade the flow size: First, use the UpdateFlowSource operation to change the flow source type. After that, you can then use the UpdateFlow operation to downgrade the flow size to MEDIUM.</td>
</tr>
<tr>
    <td><a href="#start_flow"><CopyableCode code="start_flow" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-flow_arn"><code>flow_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Starts a flow.</td>
</tr>
<tr>
    <td><a href="#stop_flow"><CopyableCode code="stop_flow" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-flow_arn"><code>flow_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Stops a flow.</td>
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
<tr id="parameter-flow_arn">
    <td><CopyableCode code="flow_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the flow that you want to stop.</td>
</tr>
<tr id="parameter-media_stream_name">
    <td><CopyableCode code="media_stream_name" /></td>
    <td><code>string</code></td>
    <td>The media stream that you updated.</td>
</tr>
<tr id="parameter-output_arn">
    <td><CopyableCode code="output_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the output that you want to update.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-source_arn">
    <td><CopyableCode code="source_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the source that you want to update.</td>
</tr>
<tr id="parameter-vpc_interface_name">
    <td><CopyableCode code="vpc_interface_name" /></td>
    <td><code>string</code></td>
    <td>The name of the VPC interface that you want to remove.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return per API request. For example, you submit a ListFlows request with MaxResults set at 5. Although 20 items match your request, the service returns no more than the first 5 items. (The service also returns a NextToken value that you can use to fetch the next batch of results.) The service might return fewer results than the MaxResults value. If MaxResults is not included in the request, the service defaults to pagination with a maximum of 10 results per page.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token that identifies the batch of results that you want to see. For example, you submit a ListFlows request with MaxResults set at 5. The service returns the first batch of results (up to 5) and a NextToken value. To see the next batch of results, you can submit the ListFlows request a second time and specify the NextToken value.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_flow"
    values={[
        { label: 'describe_flow', value: 'describe_flow' },
        { label: 'list_flows', value: 'list_flows' }
    ]}
>
<TabItem value="describe_flow">

Displays the details of a flow. The response includes the flow Amazon Resource Name (ARN), name, and Availability Zone, as well as details about the source, outputs, and entitlements.

```sql
SELECT
Flow,
Messages
FROM aws.mediaconnect.flows
WHERE flow_arn = '{{ flow_arn }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_flows">

Displays a list of flows that are associated with this account. This request returns a paginated result.

```sql
SELECT
AvailabilityZone,
Description,
FlowArn,
Maintenance,
Name,
SourceType,
Status
FROM aws.mediaconnect.flows
WHERE region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_flow"
    values={[
        { label: 'create_flow', value: 'create_flow' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_flow">

Creates a new flow. The request must include one source. The request optionally can include outputs (up to 50) and entitlements (up to 50).

```sql
INSERT INTO aws.mediaconnect.flows (
AvailabilityZone,
Entitlements,
MediaStreams,
Name,
Outputs,
Source,
SourceFailoverConfig,
Sources,
VpcInterfaces,
Maintenance,
SourceMonitoringConfig,
FlowSize,
NdiConfig,
EncodingConfig,
FlowTags,
region
)
SELECT 
'{{ AvailabilityZone }}',
'{{ Entitlements }}',
'{{ MediaStreams }}',
'{{ Name }}',
'{{ Outputs }}',
'{{ Source }}',
'{{ SourceFailoverConfig }}',
'{{ Sources }}',
'{{ VpcInterfaces }}',
'{{ Maintenance }}',
'{{ SourceMonitoringConfig }}',
'{{ FlowSize }}',
'{{ NdiConfig }}',
'{{ EncodingConfig }}',
'{{ FlowTags }}',
'{{ region }}'
RETURNING
Flow
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: flows
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the flows resource.
    - name: AvailabilityZone
      value: "{{ AvailabilityZone }}"
    - name: Entitlements
      value:
        - DataTransferSubscriberFeePercent: {{ DataTransferSubscriberFeePercent }}
          Description: "{{ Description }}"
          Encryption:
            Algorithm: "{{ Algorithm }}"
            ConstantInitializationVector: "{{ ConstantInitializationVector }}"
            DeviceId: "{{ DeviceId }}"
            KeyType: "{{ KeyType }}"
            Region: "{{ Region }}"
            ResourceId: "{{ ResourceId }}"
            RoleArn: "{{ RoleArn }}"
            SecretArn: "{{ SecretArn }}"
            Url: "{{ Url }}"
          EntitlementStatus: "{{ EntitlementStatus }}"
          Name: "{{ Name }}"
          Subscribers: "{{ Subscribers }}"
          EntitlementTags: "{{ EntitlementTags }}"
    - name: MediaStreams
      value:
        - Attributes:
            Fmtp:
              ChannelOrder: "{{ ChannelOrder }}"
              Colorimetry: "{{ Colorimetry }}"
              ExactFramerate: "{{ ExactFramerate }}"
              Par: "{{ Par }}"
              Range: "{{ Range }}"
              ScanMode: "{{ ScanMode }}"
              Tcs: "{{ Tcs }}"
            Lang: "{{ Lang }}"
          ClockRate: {{ ClockRate }}
          Description: "{{ Description }}"
          MediaStreamId: {{ MediaStreamId }}
          MediaStreamName: "{{ MediaStreamName }}"
          MediaStreamType: "{{ MediaStreamType }}"
          VideoFormat: "{{ VideoFormat }}"
          MediaStreamTags: "{{ MediaStreamTags }}"
    - name: Name
      value: "{{ Name }}"
    - name: Outputs
      value:
        - CidrAllowList: "{{ CidrAllowList }}"
          Description: "{{ Description }}"
          Destination: "{{ Destination }}"
          Encryption:
            Algorithm: "{{ Algorithm }}"
            ConstantInitializationVector: "{{ ConstantInitializationVector }}"
            DeviceId: "{{ DeviceId }}"
            KeyType: "{{ KeyType }}"
            Region: "{{ Region }}"
            ResourceId: "{{ ResourceId }}"
            RoleArn: "{{ RoleArn }}"
            SecretArn: "{{ SecretArn }}"
            Url: "{{ Url }}"
          MaxLatency: {{ MaxLatency }}
          MediaStreamOutputConfigurations: "{{ MediaStreamOutputConfigurations }}"
          MinLatency: {{ MinLatency }}
          Name: "{{ Name }}"
          Port: {{ Port }}
          Protocol: "{{ Protocol }}"
          RemoteId: "{{ RemoteId }}"
          SenderControlPort: {{ SenderControlPort }}
          SmoothingLatency: {{ SmoothingLatency }}
          StreamId: "{{ StreamId }}"
          VpcInterfaceAttachment:
            VpcInterfaceName: "{{ VpcInterfaceName }}"
          OutputStatus: "{{ OutputStatus }}"
          NdiSpeedHqQuality: {{ NdiSpeedHqQuality }}
          NdiProgramName: "{{ NdiProgramName }}"
          OutputTags: "{{ OutputTags }}"
          RouterIntegrationState: "{{ RouterIntegrationState }}"
          RouterIntegrationTransitEncryption:
            EncryptionKeyType: "{{ EncryptionKeyType }}"
            EncryptionKeyConfiguration:
              SecretsManager:
                SecretArn: "{{ SecretArn }}"
                RoleArn: "{{ RoleArn }}"
              Automatic: "{{ Automatic }}"
    - name: Source
      description: |
        The settings for the source of the flow.
      value:
        Decryption:
          Algorithm: "{{ Algorithm }}"
          ConstantInitializationVector: "{{ ConstantInitializationVector }}"
          DeviceId: "{{ DeviceId }}"
          KeyType: "{{ KeyType }}"
          Region: "{{ Region }}"
          ResourceId: "{{ ResourceId }}"
          RoleArn: "{{ RoleArn }}"
          SecretArn: "{{ SecretArn }}"
          Url: "{{ Url }}"
        Description: "{{ Description }}"
        EntitlementArn: "{{ EntitlementArn }}"
        IngestPort: {{ IngestPort }}
        MaxBitrate: {{ MaxBitrate }}
        MaxLatency: {{ MaxLatency }}
        MaxSyncBuffer: {{ MaxSyncBuffer }}
        MediaStreamSourceConfigurations:
          - EncodingName: "{{ EncodingName }}"
            InputConfigurations: "{{ InputConfigurations }}"
            MediaStreamName: "{{ MediaStreamName }}"
        MinLatency: {{ MinLatency }}
        Name: "{{ Name }}"
        Protocol: "{{ Protocol }}"
        SenderControlPort: {{ SenderControlPort }}
        SenderIpAddress: "{{ SenderIpAddress }}"
        SourceListenerAddress: "{{ SourceListenerAddress }}"
        SourceListenerPort: {{ SourceListenerPort }}
        StreamId: "{{ StreamId }}"
        VpcInterfaceName: "{{ VpcInterfaceName }}"
        WhitelistCidr: "{{ WhitelistCidr }}"
        GatewayBridgeSource:
          BridgeArn: "{{ BridgeArn }}"
          VpcInterfaceAttachment:
            VpcInterfaceName: "{{ VpcInterfaceName }}"
        NdiSourceSettings:
          SourceName: "{{ SourceName }}"
        SourceTags: "{{ SourceTags }}"
        RouterIntegrationState: "{{ RouterIntegrationState }}"
        RouterIntegrationTransitDecryption:
          EncryptionKeyType: "{{ EncryptionKeyType }}"
          EncryptionKeyConfiguration:
            SecretsManager:
              SecretArn: "{{ SecretArn }}"
              RoleArn: "{{ RoleArn }}"
            Automatic: "{{ Automatic }}"
    - name: SourceFailoverConfig
      description: |
        The settings for source failover.
      value:
        FailoverMode: "{{ FailoverMode }}"
        RecoveryWindow: {{ RecoveryWindow }}
        SourcePriority:
          PrimarySource: "{{ PrimarySource }}"
        State: "{{ State }}"
    - name: Sources
      value:
        - Decryption:
            Algorithm: "{{ Algorithm }}"
            ConstantInitializationVector: "{{ ConstantInitializationVector }}"
            DeviceId: "{{ DeviceId }}"
            KeyType: "{{ KeyType }}"
            Region: "{{ Region }}"
            ResourceId: "{{ ResourceId }}"
            RoleArn: "{{ RoleArn }}"
            SecretArn: "{{ SecretArn }}"
            Url: "{{ Url }}"
          Description: "{{ Description }}"
          EntitlementArn: "{{ EntitlementArn }}"
          IngestPort: {{ IngestPort }}
          MaxBitrate: {{ MaxBitrate }}
          MaxLatency: {{ MaxLatency }}
          MaxSyncBuffer: {{ MaxSyncBuffer }}
          MediaStreamSourceConfigurations: "{{ MediaStreamSourceConfigurations }}"
          MinLatency: {{ MinLatency }}
          Name: "{{ Name }}"
          Protocol: "{{ Protocol }}"
          SenderControlPort: {{ SenderControlPort }}
          SenderIpAddress: "{{ SenderIpAddress }}"
          SourceListenerAddress: "{{ SourceListenerAddress }}"
          SourceListenerPort: {{ SourceListenerPort }}
          StreamId: "{{ StreamId }}"
          VpcInterfaceName: "{{ VpcInterfaceName }}"
          WhitelistCidr: "{{ WhitelistCidr }}"
          GatewayBridgeSource:
            BridgeArn: "{{ BridgeArn }}"
            VpcInterfaceAttachment:
              VpcInterfaceName: "{{ VpcInterfaceName }}"
          NdiSourceSettings:
            SourceName: "{{ SourceName }}"
          SourceTags: "{{ SourceTags }}"
          RouterIntegrationState: "{{ RouterIntegrationState }}"
          RouterIntegrationTransitDecryption:
            EncryptionKeyType: "{{ EncryptionKeyType }}"
            EncryptionKeyConfiguration:
              SecretsManager:
                SecretArn: "{{ SecretArn }}"
                RoleArn: "{{ RoleArn }}"
              Automatic: "{{ Automatic }}"
    - name: VpcInterfaces
      value:
        - Name: "{{ Name }}"
          NetworkInterfaceType: "{{ NetworkInterfaceType }}"
          RoleArn: "{{ RoleArn }}"
          SecurityGroupIds: "{{ SecurityGroupIds }}"
          SubnetId: "{{ SubnetId }}"
          VpcInterfaceTags: "{{ VpcInterfaceTags }}"
    - name: Maintenance
      description: |
        Create a maintenance setting for a flow.
      value:
        MaintenanceDay: "{{ MaintenanceDay }}"
        MaintenanceStartHour: "{{ MaintenanceStartHour }}"
    - name: SourceMonitoringConfig
      description: |
        The settings for source monitoring.
      value:
        ThumbnailState: "{{ ThumbnailState }}"
        AudioMonitoringSettings:
          - SilentAudio:
              State: "{{ State }}"
              ThresholdSeconds: {{ ThresholdSeconds }}
        ContentQualityAnalysisState: "{{ ContentQualityAnalysisState }}"
        VideoMonitoringSettings:
          - BlackFrames:
              State: "{{ State }}"
              ThresholdSeconds: {{ ThresholdSeconds }}
            FrozenFrames:
              State: "{{ State }}"
              ThresholdSeconds: {{ ThresholdSeconds }}
    - name: FlowSize
      value: "{{ FlowSize }}"
      valid_values: ['MEDIUM', 'LARGE', 'LARGE_4X']
    - name: NdiConfig
      description: |
        Specifies the configuration settings for NDI sources and outputs.
      value:
        NdiState: "{{ NdiState }}"
        MachineName: "{{ MachineName }}"
        NdiDiscoveryServers:
          - DiscoveryServerAddress: "{{ DiscoveryServerAddress }}"
            DiscoveryServerPort: {{ DiscoveryServerPort }}
            VpcInterfaceAdapter: "{{ VpcInterfaceAdapter }}"
    - name: EncodingConfig
      description: |
        The encoding configuration to apply to the NDI® source when transcoding it to a transport stream for downstream distribution. You can choose between several predefined encoding profiles based on common use cases.
      value:
        EncodingProfile: "{{ EncodingProfile }}"
        VideoMaxBitrate: {{ VideoMaxBitrate }}
    - name: FlowTags
      value: "{{ FlowTags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="add_flow_media_streams"
    values={[
        { label: 'add_flow_media_streams', value: 'add_flow_media_streams' },
        { label: 'add_flow_vpc_interfaces', value: 'add_flow_vpc_interfaces' },
        { label: 'remove_flow_media_stream', value: 'remove_flow_media_stream' },
        { label: 'remove_flow_output', value: 'remove_flow_output' },
        { label: 'remove_flow_source', value: 'remove_flow_source' },
        { label: 'remove_flow_vpc_interface', value: 'remove_flow_vpc_interface' },
        { label: 'update_flow', value: 'update_flow' }
    ]}
>
<TabItem value="add_flow_media_streams">

Adds media streams to an existing flow. After you add a media stream to a flow, you can associate it with a source and/or an output that uses the ST 2110 JPEG XS or CDI protocol.

```sql
UPDATE aws.mediaconnect.flows
SET 
MediaStreams = '{{ MediaStreams }}'
WHERE 
flow_arn = '{{ flow_arn }}' --required
AND region = '{{ region }}' --required
AND MediaStreams = '{{ MediaStreams }}' --required
RETURNING
FlowArn,
MediaStreams;
```
</TabItem>
<TabItem value="add_flow_vpc_interfaces">

Adds VPC interfaces to a flow.

```sql
UPDATE aws.mediaconnect.flows
SET 
VpcInterfaces = '{{ VpcInterfaces }}'
WHERE 
flow_arn = '{{ flow_arn }}' --required
AND region = '{{ region }}' --required
AND VpcInterfaces = '{{ VpcInterfaces }}' --required
RETURNING
FlowArn,
VpcInterfaces;
```
</TabItem>
<TabItem value="remove_flow_media_stream">

Removes a media stream from a flow. This action is only available if the media stream is not associated with a source or output.

```sql
UPDATE aws.mediaconnect.flows
SET 
-- No updatable properties
WHERE 
flow_arn = '{{ flow_arn }}' --required
AND media_stream_name = '{{ media_stream_name }}' --required
AND region = '{{ region }}' --required
RETURNING
FlowArn,
MediaStreamName;
```
</TabItem>
<TabItem value="remove_flow_output">

Removes an output from an existing flow. This request can be made only on an output that does not have an entitlement associated with it. If the output has an entitlement, you must revoke the entitlement instead. When an entitlement is revoked from a flow, the service automatically removes the associated output.

```sql
UPDATE aws.mediaconnect.flows
SET 
-- No updatable properties
WHERE 
flow_arn = '{{ flow_arn }}' --required
AND output_arn = '{{ output_arn }}' --required
AND region = '{{ region }}' --required
RETURNING
FlowArn,
OutputArn;
```
</TabItem>
<TabItem value="remove_flow_source">

Removes a source from an existing flow. This request can be made only if there is more than one source on the flow.

```sql
UPDATE aws.mediaconnect.flows
SET 
-- No updatable properties
WHERE 
flow_arn = '{{ flow_arn }}' --required
AND source_arn = '{{ source_arn }}' --required
AND region = '{{ region }}' --required
RETURNING
FlowArn,
SourceArn;
```
</TabItem>
<TabItem value="remove_flow_vpc_interface">

Removes a VPC Interface from an existing flow. This request can be made only on a VPC interface that does not have a Source or Output associated with it. If the VPC interface is referenced by a Source or Output, you must first delete or update the Source or Output to no longer reference the VPC interface.

```sql
UPDATE aws.mediaconnect.flows
SET 
-- No updatable properties
WHERE 
flow_arn = '{{ flow_arn }}' --required
AND vpc_interface_name = '{{ vpc_interface_name }}' --required
AND region = '{{ region }}' --required
RETURNING
FlowArn,
NonDeletedNetworkInterfaceIds,
VpcInterfaceName;
```
</TabItem>
<TabItem value="update_flow">

Updates an existing flow. Because UpdateFlowSources and UpdateFlow are separate operations, you can't change both the source type AND the flow size in a single request. If you have a MEDIUM flow and you want to change the flow source to NDI®: First, use the UpdateFlow operation to upgrade the flow size to LARGE. After that, you can then use the UpdateFlowSource operation to configure the NDI source. If you're switching from an NDI source to a transport stream (TS) source and want to downgrade the flow size: First, use the UpdateFlowSource operation to change the flow source type. After that, you can then use the UpdateFlow operation to downgrade the flow size to MEDIUM.

```sql
UPDATE aws.mediaconnect.flows
SET 
SourceFailoverConfig = '{{ SourceFailoverConfig }}',
Maintenance = '{{ Maintenance }}',
SourceMonitoringConfig = '{{ SourceMonitoringConfig }}',
NdiConfig = '{{ NdiConfig }}',
FlowSize = '{{ FlowSize }}',
EncodingConfig = '{{ EncodingConfig }}'
WHERE 
flow_arn = '{{ flow_arn }}' --required
AND region = '{{ region }}' --required
RETURNING
Flow;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_flow"
    values={[
        { label: 'delete_flow', value: 'delete_flow' }
    ]}
>
<TabItem value="delete_flow">

Deletes a flow. Before you can delete a flow, you must stop the flow.

```sql
DELETE FROM aws.mediaconnect.flows
WHERE flow_arn = '{{ flow_arn }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="add_flow_outputs"
    values={[
        { label: 'add_flow_outputs', value: 'add_flow_outputs' },
        { label: 'add_flow_sources', value: 'add_flow_sources' },
        { label: 'update_flow_media_stream', value: 'update_flow_media_stream' },
        { label: 'update_flow_output', value: 'update_flow_output' },
        { label: 'update_flow_source', value: 'update_flow_source' },
        { label: 'start_flow', value: 'start_flow' },
        { label: 'stop_flow', value: 'stop_flow' }
    ]}
>
<TabItem value="add_flow_outputs">

Adds outputs to an existing flow. You can create up to 50 outputs per flow.

```sql
EXEC aws.mediaconnect.flows.add_flow_outputs 
@flow_arn='{{ flow_arn }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"Outputs": "{{ Outputs }}"
}'
;
```
</TabItem>
<TabItem value="add_flow_sources">

Adds sources to a flow.

```sql
EXEC aws.mediaconnect.flows.add_flow_sources 
@flow_arn='{{ flow_arn }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"Sources": "{{ Sources }}"
}'
;
```
</TabItem>
<TabItem value="update_flow_media_stream">

Updates an existing media stream.

```sql
EXEC aws.mediaconnect.flows.update_flow_media_stream 
@flow_arn='{{ flow_arn }}' --required, 
@media_stream_name='{{ media_stream_name }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"Attributes": "{{ Attributes }}", 
"ClockRate": {{ ClockRate }}, 
"Description": "{{ Description }}", 
"MediaStreamType": "{{ MediaStreamType }}", 
"VideoFormat": "{{ VideoFormat }}"
}'
;
```
</TabItem>
<TabItem value="update_flow_output">

Updates an existing flow output.

```sql
EXEC aws.mediaconnect.flows.update_flow_output 
@flow_arn='{{ flow_arn }}' --required, 
@output_arn='{{ output_arn }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"CidrAllowList": "{{ CidrAllowList }}", 
"Description": "{{ Description }}", 
"Destination": "{{ Destination }}", 
"Encryption": "{{ Encryption }}", 
"MaxLatency": {{ MaxLatency }}, 
"MediaStreamOutputConfigurations": "{{ MediaStreamOutputConfigurations }}", 
"MinLatency": {{ MinLatency }}, 
"Port": {{ Port }}, 
"Protocol": "{{ Protocol }}", 
"RemoteId": "{{ RemoteId }}", 
"SenderControlPort": {{ SenderControlPort }}, 
"SenderIpAddress": "{{ SenderIpAddress }}", 
"SmoothingLatency": {{ SmoothingLatency }}, 
"StreamId": "{{ StreamId }}", 
"VpcInterfaceAttachment": "{{ VpcInterfaceAttachment }}", 
"OutputStatus": "{{ OutputStatus }}", 
"NdiProgramName": "{{ NdiProgramName }}", 
"NdiSpeedHqQuality": {{ NdiSpeedHqQuality }}, 
"RouterIntegrationState": "{{ RouterIntegrationState }}", 
"RouterIntegrationTransitEncryption": "{{ RouterIntegrationTransitEncryption }}"
}'
;
```
</TabItem>
<TabItem value="update_flow_source">

Updates the source of a flow. Because UpdateFlowSources and UpdateFlow are separate operations, you can't change both the source type AND the flow size in a single request. If you have a MEDIUM flow and you want to change the flow source to NDI®: First, use the UpdateFlow operation to upgrade the flow size to LARGE. After that, you can then use the UpdateFlowSource operation to configure the NDI source. If you're switching from an NDI source to a transport stream (TS) source and want to downgrade the flow size: First, use the UpdateFlowSource operation to change the flow source type. After that, you can then use the UpdateFlow operation to downgrade the flow size to MEDIUM.

```sql
EXEC aws.mediaconnect.flows.update_flow_source 
@flow_arn='{{ flow_arn }}' --required, 
@source_arn='{{ source_arn }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"Decryption": "{{ Decryption }}", 
"Description": "{{ Description }}", 
"EntitlementArn": "{{ EntitlementArn }}", 
"IngestPort": {{ IngestPort }}, 
"MaxBitrate": {{ MaxBitrate }}, 
"MaxLatency": {{ MaxLatency }}, 
"MaxSyncBuffer": {{ MaxSyncBuffer }}, 
"MediaStreamSourceConfigurations": "{{ MediaStreamSourceConfigurations }}", 
"MinLatency": {{ MinLatency }}, 
"Protocol": "{{ Protocol }}", 
"SenderControlPort": {{ SenderControlPort }}, 
"SenderIpAddress": "{{ SenderIpAddress }}", 
"SourceListenerAddress": "{{ SourceListenerAddress }}", 
"SourceListenerPort": {{ SourceListenerPort }}, 
"StreamId": "{{ StreamId }}", 
"VpcInterfaceName": "{{ VpcInterfaceName }}", 
"WhitelistCidr": "{{ WhitelistCidr }}", 
"GatewayBridgeSource": "{{ GatewayBridgeSource }}", 
"NdiSourceSettings": "{{ NdiSourceSettings }}", 
"RouterIntegrationState": "{{ RouterIntegrationState }}", 
"RouterIntegrationTransitDecryption": "{{ RouterIntegrationTransitDecryption }}"
}'
;
```
</TabItem>
<TabItem value="start_flow">

Starts a flow.

```sql
EXEC aws.mediaconnect.flows.start_flow 
@flow_arn='{{ flow_arn }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
<TabItem value="stop_flow">

Stops a flow.

```sql
EXEC aws.mediaconnect.flows.stop_flow 
@flow_arn='{{ flow_arn }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
</Tabs>
