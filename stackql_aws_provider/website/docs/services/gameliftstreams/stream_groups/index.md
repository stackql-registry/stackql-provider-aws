--- 
title: stream_groups
hide_title: false
hide_table_of_contents: false
keywords:
  - stream_groups
  - gameliftstreams
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

Creates, updates, deletes, gets or lists a <code>stream_groups</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="stream_groups" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.gameliftstreams.stream_groups" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_stream_group"
    values={[
        { label: 'get_stream_group', value: 'get_stream_group' },
        { label: 'list_stream_groups', value: 'list_stream_groups' }
    ]}
>
<TabItem value="get_stream_group">

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
    <td>The Amazon Resource Name (ARN) that is assigned to the stream group resource and that uniquely identifies the group across all Amazon Web Services Regions. Format is arn:aws:gameliftstreams:&#91;AWS Region&#93;:&#91;AWS account&#93;:streamgroup/&#91;resource ID&#93;. (pattern: &lt;code&gt;(^&#91;a-zA-Z0-9-&#93;+$)|(^arn:aws:gameliftstreams:(&#91;^: &#93;*):(&#91;0-9&#93;&#123;12&#125;):(&#91;^: &#93;*)$)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="associated_applications" /></td>
    <td><code>array</code></td>
    <td>A set of applications that this stream group is associated to. You can stream any of these applications by using this stream group. This value is a set of Amazon Resource Names (ARNs) that uniquely identify application resources. Example ARN: arn:aws:gameliftstreams:us-west-2:111122223333:application/a-9ZY8X7Wv6.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>A timestamp that indicates when this resource was created. Timestamps are expressed using in ISO8601 format, such as: 2022-12-27T22:29:40+00:00 (UTC).</td>
</tr>
<tr>
    <td><CopyableCode code="default_application" /></td>
    <td><code>object</code></td>
    <td>The default Amazon GameLift Streams application that is associated with this stream group.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A descriptive label for the stream group. (pattern: &lt;code&gt;&#91;a-zA-Z0-9-_.!+@/&#93;&#91;a-zA-Z0-9-_.!+@/ &#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="expires_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which this stream group expires. Timestamps are expressed using in ISO8601 format, such as: 2022-12-27T22:29:40+00:00 (UTC). After this time, you will no longer be able to update this stream group or use it to start stream sessions. Only Get and Delete operations will work on an expired stream group.</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>A unique ID value that is assigned to the resource when it's created. Format example: sg-1AB2C3De4. (pattern: &lt;code&gt;&#91;a-zA-Z0-9-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>A timestamp that indicates when this resource was last updated. Timestamps are expressed using in ISO8601 format, such as: 2022-12-27T22:29:40+00:00 (UTC).</td>
</tr>
<tr>
    <td><CopyableCode code="location_states" /></td>
    <td><code>array</code></td>
    <td>This value is the set of locations, including their name, current status, and capacities. A location can be in one of the following states: ACTIVATING: Amazon GameLift Streams is preparing the location. You cannot stream from, scale the capacity of, or remove this location yet. ACTIVE: The location is provisioned with initial capacity. You can now stream from, scale the capacity of, or remove this location. ERROR: Amazon GameLift Streams failed to set up this location. The StatusReason field describes the error. You can remove this location and try to add it again. REMOVING: Amazon GameLift Streams is working to remove this location. This will release all provisioned capacity for this location in this stream group.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the stream group resource. Possible statuses include the following: ACTIVATING: The stream group is deploying and isn't ready to host streams. ACTIVE: The stream group is ready to host streams. ACTIVE_WITH_ERRORS: One or more locations in the stream group are in an error state. Verify the details of individual locations and remove any locations which are in error. DELETING: Amazon GameLift Streams is in the process of deleting the stream group. ERROR: An error occurred when the stream group deployed. See StatusReason (returned by CreateStreamGroup, GetStreamGroup, and UpdateStreamGroup) for more information. EXPIRED: The stream group is expired and can no longer host streams. This typically occurs when a stream group is 365 days old, as indicated by the value of ExpiresAt. Create a new stream group to resume streaming capabilities. UPDATING_LOCATIONS: One or more locations in the stream group are in the process of updating (either activating or deleting). (ACTIVATING, UPDATING_LOCATIONS, ACTIVE, ACTIVE_WITH_ERRORS, ERROR, DELETING, EXPIRED)</td>
</tr>
<tr>
    <td><CopyableCode code="status_reason" /></td>
    <td><code>string</code></td>
    <td>A short description of the reason that the stream group is in ERROR status. The possible reasons can be one of the following: internalError: The request can't process right now because of an issue with the server. Try again later. noAvailableInstances: Amazon GameLift Streams does not currently have enough available capacity to fulfill your request. Wait a few minutes and retry the request as capacity can shift frequently. You can also try to make the request using a different stream class or in another region. (internalError, noAvailableInstances)</td>
</tr>
<tr>
    <td><CopyableCode code="stream_class" /></td>
    <td><code>string</code></td>
    <td>The target stream quality for the stream group. A stream class can be one of the following: gen6n_pro_win2022 (NVIDIA, pro) Supports applications with extremely high 3D scene complexity which require maximum resources. Runs applications on Microsoft Windows Server 2022 Base and supports DirectX 12. Compatible with Unreal Engine versions up through 5.6, 32 and 64-bit applications, and anti-cheat technology. Powered by NVIDIA L4 Tensor Core GPUs. Reference resolution: 1080p Reference frame rate: 60 fps Workload specifications: 16 vCPUs, 64 GB RAM, 24 GB VRAM Tenancy: Supports 1 concurrent stream session gen6n_pro (NVIDIA, pro) Supports applications with extremely high 3D scene complexity which require maximum resources. Powered by NVIDIA L4 Tensor Core GPUs. Reference resolution: 1080p Reference frame rate: 60 fps Workload specifications: 16 vCPUs, 64 GB RAM, 24 GB VRAM Tenancy: Supports 1 concurrent stream session gen6n_ultra_win2022 (NVIDIA, ultra) Supports applications with high 3D scene complexity. Runs applications on Microsoft Windows Server 2022 Base and supports DirectX 12. Compatible with Unreal Engine versions up through 5.6, 32 and 64-bit applications, and anti-cheat technology. Powered by NVIDIA L4 Tensor Core GPUs. Reference resolution: 1080p Reference frame rate: 60 fps Workload specifications: 8 vCPUs, 32 GB RAM, 24 GB VRAM Tenancy: Supports 1 concurrent stream session gen6n_ultra (NVIDIA, ultra) Supports applications with high 3D scene complexity. Powered by NVIDIA L4 Tensor Core GPUs. Reference resolution: 1080p Reference frame rate: 60 fps Workload specifications: 8 vCPUs, 32 GB RAM, 24 GB VRAM Tenancy: Supports 1 concurrent stream session gen6n_high (NVIDIA, high) Supports applications with moderate to high 3D scene complexity. Powered by NVIDIA L4 Tensor Core GPUs. Reference resolution: 1080p Reference frame rate: 60 fps Workload specifications: 4 vCPUs, 16 GB RAM, 12 GB VRAM Tenancy: Supports up to 2 concurrent stream sessions gen6n_medium (NVIDIA, medium) Supports applications with moderate 3D scene complexity. Powered by NVIDIA L4 Tensor Core GPUs. Reference resolution: 1080p Reference frame rate: 60 fps Workload specifications: 2 vCPUs, 8 GB RAM, 6 GB VRAM Tenancy: Supports up to 4 concurrent stream sessions gen6n_small (NVIDIA, small) Supports applications with lightweight 3D scene complexity and low CPU usage. Powered by NVIDIA L4 Tensor Core GPUs. Reference resolution: 1080p Reference frame rate: 60 fps Workload specifications: 1 vCPUs, 4 GB RAM, 2 GB VRAM Tenancy: Supports up to 12 concurrent stream sessions gen6n_medium_win2022 (NVIDIA, medium) Supports applications with low 3D scene complexity. Powered by NVIDIA L4 Tensor Core GPUs. Reference resolution: 1080p Reference frame rate: 60 fps Workload specifications: 8 vCPUs, 32 GB RAM, 6 GB VRAM Tenancy: Supports 1 concurrent stream session gen6n_small_win2022 (NVIDIA, small) Supports applications with low 3D scene complexity. Powered by NVIDIA L4 Tensor Core GPUs. Reference resolution: 1080p Reference frame rate: 60 fps Workload specifications: 2 vCPUs, 8 GB RAM, 3 GB VRAM Tenancy: Supports 1 concurrent stream session gen6e_pro_win2022 (NVIDIA, pro) Supports applications with extremely high 3D scene complexity which require maximum resources. Runs applications on Microsoft Windows Server 2022 Base and supports DirectX 12. Compatible with Unreal Engine versions up through 5.6, 32 and 64-bit applications, and anti-cheat technology. Powered by NVIDIA L40S Tensor Core GPUs. Reference resolution: 1080p Reference frame rate: 60 fps Workload specifications: 16 vCPUs, 128 GB RAM, 48 GB VRAM Tenancy: Supports 1 concurrent stream session gen6e_pro (NVIDIA, pro) Supports applications with extremely high 3D scene complexity which require maximum resources. Powered by NVIDIA L40S Tensor Core GPUs. Reference resolution: 1080p Reference frame rate: 60 fps Workload specifications: 16 vCPUs, 128 GB RAM, 48 GB VRAM Tenancy: Supports 1 concurrent stream session gen5n_win2022 (NVIDIA, ultra) Supports applications with extremely high 3D scene complexity. Runs applications on Microsoft Windows Server 2022 Base and supports DirectX 12. Compatible with Unreal Engine versions up through 5.6, 32 and 64-bit applications, and anti-cheat technology. Powered by NVIDIA A10G Tensor Core GPUs. Reference resolution: 1080p Reference frame rate: 60 fps Workload specifications: 8 vCPUs, 32 GB RAM, 24 GB VRAM Tenancy: Supports 1 concurrent stream session gen5n_high (NVIDIA, high) Supports applications with moderate to high 3D scene complexity. Powered by NVIDIA A10G Tensor Core GPUs. Reference resolution: 1080p Reference frame rate: 60 fps Workload specifications: 4 vCPUs, 16 GB RAM, 12 GB VRAM Tenancy: Supports up to 2 concurrent stream sessions gen5n_ultra (NVIDIA, ultra) Supports applications with extremely high 3D scene complexity. Powered by NVIDIA A10G Tensor Core GPUs. Reference resolution: 1080p Reference frame rate: 60 fps Workload specifications: 8 vCPUs, 32 GB RAM, 24 GB VRAM Tenancy: Supports 1 concurrent stream session gen4n_win2022 (NVIDIA, ultra) Supports applications with extremely high 3D scene complexity. Runs applications on Microsoft Windows Server 2022 Base and supports DirectX 12. Compatible with Unreal Engine versions up through 5.6, 32 and 64-bit applications, and anti-cheat technology. Powered by NVIDIA T4 Tensor Core GPUs. Reference resolution: 1080p Reference frame rate: 60 fps Workload specifications: 8 vCPUs, 32 GB RAM, 16 GB VRAM Tenancy: Supports 1 concurrent stream session gen4n_high (NVIDIA, high) Supports applications with moderate to high 3D scene complexity. Powered by NVIDIA T4 Tensor Core GPUs. Reference resolution: 1080p Reference frame rate: 60 fps Workload specifications: 4 vCPUs, 16 GB RAM, 8 GB VRAM Tenancy: Supports up to 2 concurrent stream sessions gen4n_ultra (NVIDIA, ultra) Supports applications with high 3D scene complexity. Powered by NVIDIA T4 Tensor Core GPUs. Reference resolution: 1080p Reference frame rate: 60 fps Workload specifications: 8 vCPUs, 32 GB RAM, 16 GB VRAM Tenancy: Supports 1 concurrent stream session (gen4n_high, gen4n_ultra, gen4n_win2022, gen5n_high, gen5n_ultra, gen5n_win2022, gen6n_small, gen6n_medium, gen6n_high, gen6n_ultra, gen6n_ultra_win2022, gen6n_pro, gen6n_pro_win2022, gen6n_small_win2022, gen6n_medium_win2022, gen6e_pro, gen6e_pro_win2022)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_stream_groups">

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
    <td>An Amazon Resource Name (ARN) that uniquely identifies the stream group resource. Example ARN: arn:aws:gameliftstreams:us-west-2:111122223333:streamgroup/sg-1AB2C3De4. (pattern: &lt;code&gt;(^&#91;a-zA-Z0-9-&#93;+$)|(^arn:aws:gameliftstreams:(&#91;^: &#93;*):(&#91;0-9&#93;&#123;12&#125;):(&#91;^: &#93;*)$)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>A timestamp that indicates when this resource was created. Timestamps are expressed using in ISO8601 format, such as: 2022-12-27T22:29:40+00:00 (UTC).</td>
</tr>
<tr>
    <td><CopyableCode code="default_application" /></td>
    <td><code>object</code></td>
    <td>Object that identifies the Amazon GameLift Streams application to stream with this stream group.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A descriptive label for the stream group. (pattern: &lt;code&gt;&#91;a-zA-Z0-9-_.!+@/&#93;&#91;a-zA-Z0-9-_.!+@/ &#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="expires_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which this stream group expires. Timestamps are expressed using in ISO8601 format, such as: 2022-12-27T22:29:40+00:00 (UTC). After this time, you will no longer be able to update this stream group or use it to start stream sessions. Only Get and Delete operations will work on an expired stream group.</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>An ID that uniquely identifies the stream group resource. Example ID: sg-1AB2C3De4. (pattern: &lt;code&gt;&#91;a-zA-Z0-9-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>A timestamp that indicates when this resource was last updated. Timestamps are expressed using in ISO8601 format, such as: 2022-12-27T22:29:40+00:00 (UTC).</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the stream group resource. Possible statuses include the following: ACTIVATING: The stream group is deploying and isn't ready to host streams. ACTIVE: The stream group is ready to host streams. ACTIVE_WITH_ERRORS: One or more locations in the stream group are in an error state. Verify the details of individual locations and remove any locations which are in error. DELETING: Amazon GameLift Streams is in the process of deleting the stream group. ERROR: An error occurred when the stream group deployed. See StatusReason (returned by CreateStreamGroup, GetStreamGroup, and UpdateStreamGroup) for more information. EXPIRED: The stream group is expired and can no longer host streams. This typically occurs when a stream group is 365 days old, as indicated by the value of ExpiresAt. Create a new stream group to resume streaming capabilities. UPDATING_LOCATIONS: One or more locations in the stream group are in the process of updating (either activating or deleting). (ACTIVATING, UPDATING_LOCATIONS, ACTIVE, ACTIVE_WITH_ERRORS, ERROR, DELETING, EXPIRED)</td>
</tr>
<tr>
    <td><CopyableCode code="stream_class" /></td>
    <td><code>string</code></td>
    <td>The target stream quality for the stream group. A stream class can be one of the following: gen6n_pro_win2022 (NVIDIA, pro) Supports applications with extremely high 3D scene complexity which require maximum resources. Runs applications on Microsoft Windows Server 2022 Base and supports DirectX 12. Compatible with Unreal Engine versions up through 5.6, 32 and 64-bit applications, and anti-cheat technology. Powered by NVIDIA L4 Tensor Core GPUs. Reference resolution: 1080p Reference frame rate: 60 fps Workload specifications: 16 vCPUs, 64 GB RAM, 24 GB VRAM Tenancy: Supports 1 concurrent stream session gen6n_pro (NVIDIA, pro) Supports applications with extremely high 3D scene complexity which require maximum resources. Powered by NVIDIA L4 Tensor Core GPUs. Reference resolution: 1080p Reference frame rate: 60 fps Workload specifications: 16 vCPUs, 64 GB RAM, 24 GB VRAM Tenancy: Supports 1 concurrent stream session gen6n_ultra_win2022 (NVIDIA, ultra) Supports applications with high 3D scene complexity. Runs applications on Microsoft Windows Server 2022 Base and supports DirectX 12. Compatible with Unreal Engine versions up through 5.6, 32 and 64-bit applications, and anti-cheat technology. Powered by NVIDIA L4 Tensor Core GPUs. Reference resolution: 1080p Reference frame rate: 60 fps Workload specifications: 8 vCPUs, 32 GB RAM, 24 GB VRAM Tenancy: Supports 1 concurrent stream session gen6n_ultra (NVIDIA, ultra) Supports applications with high 3D scene complexity. Powered by NVIDIA L4 Tensor Core GPUs. Reference resolution: 1080p Reference frame rate: 60 fps Workload specifications: 8 vCPUs, 32 GB RAM, 24 GB VRAM Tenancy: Supports 1 concurrent stream session gen6n_high (NVIDIA, high) Supports applications with moderate to high 3D scene complexity. Powered by NVIDIA L4 Tensor Core GPUs. Reference resolution: 1080p Reference frame rate: 60 fps Workload specifications: 4 vCPUs, 16 GB RAM, 12 GB VRAM Tenancy: Supports up to 2 concurrent stream sessions gen6n_medium (NVIDIA, medium) Supports applications with moderate 3D scene complexity. Powered by NVIDIA L4 Tensor Core GPUs. Reference resolution: 1080p Reference frame rate: 60 fps Workload specifications: 2 vCPUs, 8 GB RAM, 6 GB VRAM Tenancy: Supports up to 4 concurrent stream sessions gen6n_small (NVIDIA, small) Supports applications with lightweight 3D scene complexity and low CPU usage. Powered by NVIDIA L4 Tensor Core GPUs. Reference resolution: 1080p Reference frame rate: 60 fps Workload specifications: 1 vCPUs, 4 GB RAM, 2 GB VRAM Tenancy: Supports up to 12 concurrent stream sessions gen6n_medium_win2022 (NVIDIA, medium) Supports applications with low 3D scene complexity. Powered by NVIDIA L4 Tensor Core GPUs. Reference resolution: 1080p Reference frame rate: 60 fps Workload specifications: 8 vCPUs, 32 GB RAM, 6 GB VRAM Tenancy: Supports 1 concurrent stream session gen6n_small_win2022 (NVIDIA, small) Supports applications with low 3D scene complexity. Powered by NVIDIA L4 Tensor Core GPUs. Reference resolution: 1080p Reference frame rate: 60 fps Workload specifications: 2 vCPUs, 8 GB RAM, 3 GB VRAM Tenancy: Supports 1 concurrent stream session gen6e_pro_win2022 (NVIDIA, pro) Supports applications with extremely high 3D scene complexity which require maximum resources. Runs applications on Microsoft Windows Server 2022 Base and supports DirectX 12. Compatible with Unreal Engine versions up through 5.6, 32 and 64-bit applications, and anti-cheat technology. Powered by NVIDIA L40S Tensor Core GPUs. Reference resolution: 1080p Reference frame rate: 60 fps Workload specifications: 16 vCPUs, 128 GB RAM, 48 GB VRAM Tenancy: Supports 1 concurrent stream session gen6e_pro (NVIDIA, pro) Supports applications with extremely high 3D scene complexity which require maximum resources. Powered by NVIDIA L40S Tensor Core GPUs. Reference resolution: 1080p Reference frame rate: 60 fps Workload specifications: 16 vCPUs, 128 GB RAM, 48 GB VRAM Tenancy: Supports 1 concurrent stream session gen5n_win2022 (NVIDIA, ultra) Supports applications with extremely high 3D scene complexity. Runs applications on Microsoft Windows Server 2022 Base and supports DirectX 12. Compatible with Unreal Engine versions up through 5.6, 32 and 64-bit applications, and anti-cheat technology. Powered by NVIDIA A10G Tensor Core GPUs. Reference resolution: 1080p Reference frame rate: 60 fps Workload specifications: 8 vCPUs, 32 GB RAM, 24 GB VRAM Tenancy: Supports 1 concurrent stream session gen5n_high (NVIDIA, high) Supports applications with moderate to high 3D scene complexity. Powered by NVIDIA A10G Tensor Core GPUs. Reference resolution: 1080p Reference frame rate: 60 fps Workload specifications: 4 vCPUs, 16 GB RAM, 12 GB VRAM Tenancy: Supports up to 2 concurrent stream sessions gen5n_ultra (NVIDIA, ultra) Supports applications with extremely high 3D scene complexity. Powered by NVIDIA A10G Tensor Core GPUs. Reference resolution: 1080p Reference frame rate: 60 fps Workload specifications: 8 vCPUs, 32 GB RAM, 24 GB VRAM Tenancy: Supports 1 concurrent stream session gen4n_win2022 (NVIDIA, ultra) Supports applications with extremely high 3D scene complexity. Runs applications on Microsoft Windows Server 2022 Base and supports DirectX 12. Compatible with Unreal Engine versions up through 5.6, 32 and 64-bit applications, and anti-cheat technology. Powered by NVIDIA T4 Tensor Core GPUs. Reference resolution: 1080p Reference frame rate: 60 fps Workload specifications: 8 vCPUs, 32 GB RAM, 16 GB VRAM Tenancy: Supports 1 concurrent stream session gen4n_high (NVIDIA, high) Supports applications with moderate to high 3D scene complexity. Powered by NVIDIA T4 Tensor Core GPUs. Reference resolution: 1080p Reference frame rate: 60 fps Workload specifications: 4 vCPUs, 16 GB RAM, 8 GB VRAM Tenancy: Supports up to 2 concurrent stream sessions gen4n_ultra (NVIDIA, ultra) Supports applications with high 3D scene complexity. Powered by NVIDIA T4 Tensor Core GPUs. Reference resolution: 1080p Reference frame rate: 60 fps Workload specifications: 8 vCPUs, 32 GB RAM, 16 GB VRAM Tenancy: Supports 1 concurrent stream session (gen4n_high, gen4n_ultra, gen4n_win2022, gen5n_high, gen5n_ultra, gen5n_win2022, gen6n_small, gen6n_medium, gen6n_high, gen6n_ultra, gen6n_ultra_win2022, gen6n_pro, gen6n_pro_win2022, gen6n_small_win2022, gen6n_medium_win2022, gen6e_pro, gen6e_pro_win2022)</td>
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
    <td><a href="#get_stream_group"><CopyableCode code="get_stream_group" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves properties for a Amazon GameLift Streams stream group resource. Specify the ID of the stream group that you want to retrieve. If the operation is successful, it returns properties for the requested stream group.</td>
</tr>
<tr>
    <td><a href="#list_stream_groups"><CopyableCode code="list_stream_groups" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a></td>
    <td>Retrieves a list of all Amazon GameLift Streams stream groups that are associated with the Amazon Web Services account in use. This operation returns stream groups in all statuses, in no particular order. You can paginate the results as needed.</td>
</tr>
<tr>
    <td><a href="#create_stream_group"><CopyableCode code="create_stream_group" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-StreamClass"><code>StreamClass</code></a></td>
    <td></td>
    <td>Stream groups manage how Amazon GameLift Streams allocates resources and handles concurrent streams, allowing you to effectively manage capacity and costs. Within a stream group, you specify an application to stream, streaming locations and their capacity, and the stream class you want to use when streaming applications to your end-users. A stream class defines the hardware configuration of the compute resources that Amazon GameLift Streams will use when streaming, such as the CPU, GPU, and memory. Stream capacity represents the number of concurrent streams that can be active at a time. You set stream capacity per location, per stream group. The following capacity settings are available: Always-on capacity: This setting, if non-zero, indicates minimum streaming capacity which is allocated to you and is never released back to the service. You pay for this base level of capacity at all times, whether used or idle. Maximum capacity: This indicates the maximum capacity that the service can allocate for you. Newly created streams may take a few minutes to start. Capacity is released back to the service when idle. You pay for capacity that is allocated to you until it is released. Target-idle capacity: This indicates idle capacity which the service pre-allocates and holds for you in anticipation of future activity. This helps to insulate your users from capacity-allocation delays. You pay for capacity which is held in this intentional idle state. Values for capacity must be whole number multiples of the tenancy value of the stream group's stream class. To adjust the capacity of any ACTIVE stream group, call UpdateStreamGroup. If the CreateStreamGroup request is successful, Amazon GameLift Streams assigns a unique ID to the stream group resource and sets the status to ACTIVATING. It can take a few minutes for Amazon GameLift Streams to finish creating the stream group while it searches for unallocated compute resources and provisions them. When complete, the stream group status will be ACTIVE and you can start stream sessions by using StartStreamSession. To check the stream group's status, call GetStreamGroup. Stream groups should be recreated every 3-4 weeks to pick up important service updates and fixes. Stream groups that are older than 180 days can no longer be updated with new application associations. Stream groups expire when they are 365 days old, at which point they can no longer stream sessions. The exact expiration date is indicated by the date value in the ExpiresAt field.</td>
</tr>
<tr>
    <td><a href="#add_stream_group_locations"><CopyableCode code="add_stream_group_locations" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-LocationConfigurations"><code>LocationConfigurations</code></a></td>
    <td></td>
    <td>Add locations that can host stream sessions. To add a location, the stream group must be in ACTIVE status. You configure locations and their corresponding capacity for each stream group. Creating a stream group in a location that's nearest to your end users can help minimize latency and improve quality. This operation provisions stream capacity at the specified locations. By default, all locations have 1 or 2 capacity, depending on the stream class option: 2 for 'High' and 1 for 'Ultra' and 'Win2022'. This operation also copies the content files of all associated applications to an internal S3 bucket at each location. This allows Amazon GameLift Streams to host performant stream sessions.</td>
</tr>
<tr>
    <td><a href="#remove_stream_group_locations"><CopyableCode code="remove_stream_group_locations" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-locations"><code>locations</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Removes a set of remote locations from this stream group. To remove a location, the stream group must be in ACTIVE status. When you remove a location, Amazon GameLift Streams releases allocated compute resources in that location. Stream sessions can no longer start from removed locations in a stream group. Amazon GameLift Streams also deletes the content files of all associated applications that were in Amazon GameLift Streams's internal Amazon S3 bucket at this location. You cannot remove the Amazon Web Services Region location where you initially created this stream group, known as the primary location. However, you can set the stream capacity to zero to avoid incurring costs for allocated compute resources in that location.</td>
</tr>
<tr>
    <td><a href="#update_stream_group"><CopyableCode code="update_stream_group" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates the configuration settings for an Amazon GameLift Streams stream group resource. To update a stream group, it must be in ACTIVE status. You can change the description, the set of locations, and the requested capacity of a stream group per location. If you want to change the stream class, create a new stream group. Stream capacity represents the number of concurrent streams that can be active at a time. You set stream capacity per location, per stream group. The following capacity settings are available: Always-on capacity: This setting, if non-zero, indicates minimum streaming capacity which is allocated to you and is never released back to the service. You pay for this base level of capacity at all times, whether used or idle. Maximum capacity: This indicates the maximum capacity that the service can allocate for you. Newly created streams may take a few minutes to start. Capacity is released back to the service when idle. You pay for capacity that is allocated to you until it is released. Target-idle capacity: This indicates idle capacity which the service pre-allocates and holds for you in anticipation of future activity. This helps to insulate your users from capacity-allocation delays. You pay for capacity which is held in this intentional idle state. Values for capacity must be whole number multiples of the tenancy value of the stream group's stream class. To update a stream group, specify the stream group's Amazon Resource Name (ARN) and provide the new values. If the request is successful, Amazon GameLift Streams returns the complete updated metadata for the stream group. Expired stream groups cannot be updated.</td>
</tr>
<tr>
    <td><a href="#delete_stream_group"><CopyableCode code="delete_stream_group" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Permanently deletes all compute resources and information related to a stream group. To delete a stream group, specify the unique stream group identifier. During the deletion process, the stream group's status is DELETING. This operation stops streams in progress and prevents new streams from starting. As a best practice, before deleting the stream group, call ListStreamSessions to check for streams in progress and take action to stop them. When you delete a stream group, any application associations referring to that stream group are automatically removed.</td>
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
<tr id="parameter-identifier">
    <td><CopyableCode code="identifier" /></td>
    <td><code>string</code></td>
    <td>An Amazon Resource Name (ARN) or ID that uniquely identifies the stream group resource. Example ARN: arn:aws:gameliftstreams:us-west-2:111122223333:streamgroup/sg-1AB2C3De4. Example ID: sg-1AB2C3De4.</td>
</tr>
<tr id="parameter-locations">
    <td><CopyableCode code="locations" /></td>
    <td><code>array</code></td>
    <td>A set of locations to remove this stream group. For example, us-east-1. For a complete list of locations that Amazon GameLift Streams supports, refer to Regions, quotas, and limitations in the Amazon GameLift Streams Developer Guide.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The number of results to return. Use this parameter with NextToken to return results in sequential pages. Default value is 25.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>A token that marks the start of the next set of results. Use this token when you retrieve results as sequential pages. To get the first page of results, omit a token value. To get the remaining pages, provide the token returned with the previous result set.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_stream_group"
    values={[
        { label: 'get_stream_group', value: 'get_stream_group' },
        { label: 'list_stream_groups', value: 'list_stream_groups' }
    ]}
>
<TabItem value="get_stream_group">

Retrieves properties for a Amazon GameLift Streams stream group resource. Specify the ID of the stream group that you want to retrieve. If the operation is successful, it returns properties for the requested stream group.

```sql
SELECT
arn,
associated_applications,
created_at,
default_application,
description,
expires_at,
id,
last_updated_at,
location_states,
status,
status_reason,
stream_class
FROM aws.gameliftstreams.stream_groups
WHERE identifier = '{{ identifier }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_stream_groups">

Retrieves a list of all Amazon GameLift Streams stream groups that are associated with the Amazon Web Services account in use. This operation returns stream groups in all statuses, in no particular order. You can paginate the results as needed.

```sql
SELECT
arn,
created_at,
default_application,
description,
expires_at,
id,
last_updated_at,
status,
stream_class
FROM aws.gameliftstreams.stream_groups
WHERE region = '{{ region }}' -- required
AND NextToken = '{{ NextToken }}'
AND MaxResults = '{{ MaxResults }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_stream_group"
    values={[
        { label: 'create_stream_group', value: 'create_stream_group' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_stream_group">

Stream groups manage how Amazon GameLift Streams allocates resources and handles concurrent streams, allowing you to effectively manage capacity and costs. Within a stream group, you specify an application to stream, streaming locations and their capacity, and the stream class you want to use when streaming applications to your end-users. A stream class defines the hardware configuration of the compute resources that Amazon GameLift Streams will use when streaming, such as the CPU, GPU, and memory. Stream capacity represents the number of concurrent streams that can be active at a time. You set stream capacity per location, per stream group. The following capacity settings are available: Always-on capacity: This setting, if non-zero, indicates minimum streaming capacity which is allocated to you and is never released back to the service. You pay for this base level of capacity at all times, whether used or idle. Maximum capacity: This indicates the maximum capacity that the service can allocate for you. Newly created streams may take a few minutes to start. Capacity is released back to the service when idle. You pay for capacity that is allocated to you until it is released. Target-idle capacity: This indicates idle capacity which the service pre-allocates and holds for you in anticipation of future activity. This helps to insulate your users from capacity-allocation delays. You pay for capacity which is held in this intentional idle state. Values for capacity must be whole number multiples of the tenancy value of the stream group's stream class. To adjust the capacity of any ACTIVE stream group, call UpdateStreamGroup. If the CreateStreamGroup request is successful, Amazon GameLift Streams assigns a unique ID to the stream group resource and sets the status to ACTIVATING. It can take a few minutes for Amazon GameLift Streams to finish creating the stream group while it searches for unallocated compute resources and provisions them. When complete, the stream group status will be ACTIVE and you can start stream sessions by using StartStreamSession. To check the stream group's status, call GetStreamGroup. Stream groups should be recreated every 3-4 weeks to pick up important service updates and fixes. Stream groups that are older than 180 days can no longer be updated with new application associations. Stream groups expire when they are 365 days old, at which point they can no longer stream sessions. The exact expiration date is indicated by the date value in the ExpiresAt field.

```sql
INSERT INTO aws.gameliftstreams.stream_groups (
Description,
StreamClass,
DefaultApplicationIdentifier,
LocationConfigurations,
Tags,
ClientToken,
region
)
SELECT 
'{{ Description }}',
'{{ StreamClass }}' /* required */,
'{{ DefaultApplicationIdentifier }}',
'{{ LocationConfigurations }}',
'{{ Tags }}',
'{{ ClientToken }}',
'{{ region }}'
RETURNING
arn,
associated_applications,
created_at,
default_application,
description,
expires_at,
id,
last_updated_at,
location_states,
status,
status_reason,
stream_class
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: stream_groups
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the stream_groups resource.
    - name: Description
      value: "{{ Description }}"
    - name: StreamClass
      value: "{{ StreamClass }}"
      valid_values: ['gen4n_high', 'gen4n_ultra', 'gen4n_win2022', 'gen5n_high', 'gen5n_ultra', 'gen5n_win2022', 'gen6n_small', 'gen6n_medium', 'gen6n_high', 'gen6n_ultra', 'gen6n_ultra_win2022', 'gen6n_pro', 'gen6n_pro_win2022', 'gen6n_small_win2022', 'gen6n_medium_win2022', 'gen6e_pro', 'gen6e_pro_win2022']
    - name: DefaultApplicationIdentifier
      value: "{{ DefaultApplicationIdentifier }}"
    - name: LocationConfigurations
      value:
        - LocationName: "{{ LocationName }}"
          AlwaysOnCapacity: {{ AlwaysOnCapacity }}
          OnDemandCapacity: {{ OnDemandCapacity }}
          TargetIdleCapacity: {{ TargetIdleCapacity }}
          MaximumCapacity: {{ MaximumCapacity }}
          VpcTransitConfiguration:
            VpcId: "{{ VpcId }}"
            Ipv4CidrBlocks:
              - "{{ Ipv4CidrBlocks }}"
    - name: Tags
      value: "{{ Tags }}"
    - name: ClientToken
      value: "{{ ClientToken }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="add_stream_group_locations"
    values={[
        { label: 'add_stream_group_locations', value: 'add_stream_group_locations' },
        { label: 'remove_stream_group_locations', value: 'remove_stream_group_locations' },
        { label: 'update_stream_group', value: 'update_stream_group' }
    ]}
>
<TabItem value="add_stream_group_locations">

Add locations that can host stream sessions. To add a location, the stream group must be in ACTIVE status. You configure locations and their corresponding capacity for each stream group. Creating a stream group in a location that's nearest to your end users can help minimize latency and improve quality. This operation provisions stream capacity at the specified locations. By default, all locations have 1 or 2 capacity, depending on the stream class option: 2 for 'High' and 1 for 'Ultra' and 'Win2022'. This operation also copies the content files of all associated applications to an internal S3 bucket at each location. This allows Amazon GameLift Streams to host performant stream sessions.

```sql
UPDATE aws.gameliftstreams.stream_groups
SET 
LocationConfigurations = '{{ LocationConfigurations }}'
WHERE 
identifier = '{{ identifier }}' --required
AND region = '{{ region }}' --required
AND LocationConfigurations = '{{ LocationConfigurations }}' --required
RETURNING
identifier,
locations;
```
</TabItem>
<TabItem value="remove_stream_group_locations">

Removes a set of remote locations from this stream group. To remove a location, the stream group must be in ACTIVE status. When you remove a location, Amazon GameLift Streams releases allocated compute resources in that location. Stream sessions can no longer start from removed locations in a stream group. Amazon GameLift Streams also deletes the content files of all associated applications that were in Amazon GameLift Streams's internal Amazon S3 bucket at this location. You cannot remove the Amazon Web Services Region location where you initially created this stream group, known as the primary location. However, you can set the stream capacity to zero to avoid incurring costs for allocated compute resources in that location.

```sql
UPDATE aws.gameliftstreams.stream_groups
SET 
-- No updatable properties
WHERE 
identifier = '{{ identifier }}' --required
AND locations = '{{ locations }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
<TabItem value="update_stream_group">

Updates the configuration settings for an Amazon GameLift Streams stream group resource. To update a stream group, it must be in ACTIVE status. You can change the description, the set of locations, and the requested capacity of a stream group per location. If you want to change the stream class, create a new stream group. Stream capacity represents the number of concurrent streams that can be active at a time. You set stream capacity per location, per stream group. The following capacity settings are available: Always-on capacity: This setting, if non-zero, indicates minimum streaming capacity which is allocated to you and is never released back to the service. You pay for this base level of capacity at all times, whether used or idle. Maximum capacity: This indicates the maximum capacity that the service can allocate for you. Newly created streams may take a few minutes to start. Capacity is released back to the service when idle. You pay for capacity that is allocated to you until it is released. Target-idle capacity: This indicates idle capacity which the service pre-allocates and holds for you in anticipation of future activity. This helps to insulate your users from capacity-allocation delays. You pay for capacity which is held in this intentional idle state. Values for capacity must be whole number multiples of the tenancy value of the stream group's stream class. To update a stream group, specify the stream group's Amazon Resource Name (ARN) and provide the new values. If the request is successful, Amazon GameLift Streams returns the complete updated metadata for the stream group. Expired stream groups cannot be updated.

```sql
UPDATE aws.gameliftstreams.stream_groups
SET 
LocationConfigurations = '{{ LocationConfigurations }}',
Description = '{{ Description }}',
DefaultApplicationIdentifier = '{{ DefaultApplicationIdentifier }}'
WHERE 
identifier = '{{ identifier }}' --required
AND region = '{{ region }}' --required
RETURNING
arn,
associated_applications,
created_at,
default_application,
description,
expires_at,
id,
last_updated_at,
location_states,
status,
status_reason,
stream_class;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_stream_group"
    values={[
        { label: 'delete_stream_group', value: 'delete_stream_group' }
    ]}
>
<TabItem value="delete_stream_group">

Permanently deletes all compute resources and information related to a stream group. To delete a stream group, specify the unique stream group identifier. During the deletion process, the stream group's status is DELETING. This operation stops streams in progress and prevents new streams from starting. As a best practice, before deleting the stream group, call ListStreamSessions to check for streams in progress and take action to stop them. When you delete a stream group, any application associations referring to that stream group are automatically removed.

```sql
DELETE FROM aws.gameliftstreams.stream_groups
WHERE identifier = '{{ identifier }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
