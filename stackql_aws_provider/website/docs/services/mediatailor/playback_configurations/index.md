--- 
title: playback_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - playback_configurations
  - mediatailor
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

Creates, updates, deletes, gets or lists a <code>playback_configurations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="playback_configurations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.mediatailor.playback_configurations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_playback_configuration"
    values={[
        { label: 'get_playback_configuration', value: 'get_playback_configuration' },
        { label: 'list_playback_configurations', value: 'list_playback_configurations' }
    ]}
>
<TabItem value="get_playback_configuration">

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
    <td><CopyableCode code="ad_conditioning_configuration" /></td>
    <td><code>object</code></td>
    <td>The setting that indicates what conditioning MediaTailor will perform on ads that the ad decision server (ADS) returns, and what priority MediaTailor uses when inserting ads.</td>
</tr>
<tr>
    <td><CopyableCode code="ad_decision_server_configuration" /></td>
    <td><code>object</code></td>
    <td>The configuration for customizing HTTP requests to the ad decision server (ADS). This includes settings for request method, headers, body content, and compression options.</td>
</tr>
<tr>
    <td><CopyableCode code="ad_decision_server_url" /></td>
    <td><code>string</code></td>
    <td>The URL for the ad decision server (ADS). This includes the specification of static parameters and placeholders for dynamic parameters. AWS Elemental MediaTailor substitutes player-specific and session-specific parameters as needed when calling the ADS. Alternately, for testing, you can provide a static VAST URL. The maximum length is 25,000 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="avail_suppression" /></td>
    <td><code>object</code></td>
    <td>The configuration for avail suppression, also known as ad suppression. For more information about ad suppression, see Ad Suppression.</td>
</tr>
<tr>
    <td><CopyableCode code="bumper" /></td>
    <td><code>object</code></td>
    <td>The configuration for bumpers. Bumpers are short audio or video clips that play at the start or before the end of an ad break. To learn more about bumpers, see Bumpers.</td>
</tr>
<tr>
    <td><CopyableCode code="cdn_configuration" /></td>
    <td><code>object</code></td>
    <td>The configuration for using a content delivery network (CDN), like Amazon CloudFront, for content and ad segment management.</td>
</tr>
<tr>
    <td><CopyableCode code="configuration_aliases" /></td>
    <td><code>object</code></td>
    <td>The player parameters and aliases used as dynamic variables during session initialization. For more information, see Domain Variables.</td>
</tr>
<tr>
    <td><CopyableCode code="dash_configuration" /></td>
    <td><code>object</code></td>
    <td>The configuration for DASH content.</td>
</tr>
<tr>
    <td><CopyableCode code="function_mapping" /></td>
    <td><code>object</code></td>
    <td>A map of lifecycle hook event names to function identifiers. The function mapping specifies which function MediaTailor executes at each lifecycle hook during ad insertion. Valid keys are PRE_SESSION_INITIALIZATION and PRE_ADS_REQUEST. For more information, see Functions lifecycle hooks in the MediaTailor User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="hls_configuration" /></td>
    <td><code>object</code></td>
    <td>The configuration for HLS content.</td>
</tr>
<tr>
    <td><CopyableCode code="insertion_mode" /></td>
    <td><code>string</code></td>
    <td>The setting that controls whether players can use stitched or guided ad insertion. The default, STITCHED_ONLY, forces all player sessions to use stitched (server-side) ad insertion. Choosing PLAYER_SELECT allows players to select either stitched or guided ad insertion at session-initialization time. The default for players that do not specify an insertion mode is stitched. (STITCHED_ONLY, PLAYER_SELECT)</td>
</tr>
<tr>
    <td><CopyableCode code="live_pre_roll_configuration" /></td>
    <td><code>object</code></td>
    <td>The configuration for pre-roll ad insertion.</td>
</tr>
<tr>
    <td><CopyableCode code="log_configuration" /></td>
    <td><code>object</code></td>
    <td>The configuration that defines where AWS Elemental MediaTailor sends logs for the playback configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="manifest_processing_rules" /></td>
    <td><code>object</code></td>
    <td>The configuration for manifest processing rules. Manifest processing rules enable customization of the personalized manifests created by MediaTailor.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The identifier for the playback configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="personalization_threshold_seconds" /></td>
    <td><code>integer</code></td>
    <td>Defines the maximum duration of underfilled ad time (in seconds) allowed in an ad break. If the duration of underfilled ad time exceeds the personalization threshold, then the personalization of the ad break is abandoned and the underlying content is shown. This feature applies to ad replacement in live and VOD streams, rather than ad insertion, because it relies on an underlying content stream. For more information about ad break behavior, including ad replacement and insertion, see Ad Behavior in AWS Elemental MediaTailor.</td>
</tr>
<tr>
    <td><CopyableCode code="playback_configuration_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) for the playback configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="playback_endpoint_prefix" /></td>
    <td><code>string</code></td>
    <td>The URL that the player accesses to get a manifest from AWS Elemental MediaTailor. This session will use server-side reporting.</td>
</tr>
<tr>
    <td><CopyableCode code="session_initialization_endpoint_prefix" /></td>
    <td><code>string</code></td>
    <td>The URL that the player uses to initialize a session that uses client-side reporting.</td>
</tr>
<tr>
    <td><CopyableCode code="slate_ad_url" /></td>
    <td><code>string</code></td>
    <td>The URL for a high-quality video asset to transcode and use to fill in time that's not used by ads. AWS Elemental MediaTailor shows the slate to fill in gaps in media content. Configuring the slate is optional for non-VPAID playback configurations. For VPAID, the slate is required because MediaTailor provides it in the slots designated for dynamic ad content. The slate must be a high-quality asset that contains both audio and video.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The tags assigned to the playback configuration. Tags are key-value pairs that you can associate with Amazon resources to help with organization, access control, and cost tracking. For more information, see Tagging AWS Elemental MediaTailor Resources.</td>
</tr>
<tr>
    <td><CopyableCode code="transcode_profile_name" /></td>
    <td><code>string</code></td>
    <td>The name that is used to associate this playback configuration with a custom transcode profile. This overrides the dynamic transcoding defaults of MediaTailor. Use this only if you have already set up custom profiles with the help of AWS Support.</td>
</tr>
<tr>
    <td><CopyableCode code="video_content_source_url" /></td>
    <td><code>string</code></td>
    <td>The URL prefix for the parent manifest for the stream, minus the asset ID. The maximum length is 512 characters.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_playback_configurations">

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
    <td><CopyableCode code="ad_conditioning_configuration" /></td>
    <td><code>object</code></td>
    <td>The setting that indicates what conditioning MediaTailor will perform on ads that the ad decision server (ADS) returns, and what priority MediaTailor uses when inserting ads.</td>
</tr>
<tr>
    <td><CopyableCode code="ad_decision_server_configuration" /></td>
    <td><code>object</code></td>
    <td>Configuration parameters for customizing HTTP requests sent to the ad decision server (ADS). This allows you to specify the HTTP method, headers, request body, and compression settings for ADS requests.</td>
</tr>
<tr>
    <td><CopyableCode code="ad_decision_server_url" /></td>
    <td><code>string</code></td>
    <td>The URL for the ad decision server (ADS). This includes the specification of static parameters and placeholders for dynamic parameters. AWS Elemental MediaTailor substitutes player-specific and session-specific parameters as needed when calling the ADS. Alternately, for testing you can provide a static VAST URL. The maximum length is 25,000 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="avail_suppression" /></td>
    <td><code>object</code></td>
    <td>The configuration for avail suppression, also known as ad suppression. For more information about ad suppression, see Ad Suppression.</td>
</tr>
<tr>
    <td><CopyableCode code="bumper" /></td>
    <td><code>object</code></td>
    <td>The configuration for bumpers. Bumpers are short audio or video clips that play at the start or before the end of an ad break. To learn more about bumpers, see Bumpers.</td>
</tr>
<tr>
    <td><CopyableCode code="cdn_configuration" /></td>
    <td><code>object</code></td>
    <td>The configuration for using a content delivery network (CDN), like Amazon CloudFront, for content and ad segment management.</td>
</tr>
<tr>
    <td><CopyableCode code="configuration_aliases" /></td>
    <td><code>object</code></td>
    <td>The player parameters and aliases used as dynamic variables during session initialization. For more information, see Domain Variables.</td>
</tr>
<tr>
    <td><CopyableCode code="dash_configuration" /></td>
    <td><code>object</code></td>
    <td>The configuration for a DASH source.</td>
</tr>
<tr>
    <td><CopyableCode code="function_mapping" /></td>
    <td><code>object</code></td>
    <td>A map of lifecycle hook event names to function identifiers. The function mapping specifies which function MediaTailor executes at each lifecycle hook during ad insertion. Valid keys are PRE_SESSION_INITIALIZATION and PRE_ADS_REQUEST. For more information, see Functions lifecycle hooks in the MediaTailor User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="hls_configuration" /></td>
    <td><code>object</code></td>
    <td>The configuration for HLS content.</td>
</tr>
<tr>
    <td><CopyableCode code="insertion_mode" /></td>
    <td><code>string</code></td>
    <td>The setting that controls whether players can use stitched or guided ad insertion. The default, STITCHED_ONLY, forces all player sessions to use stitched (server-side) ad insertion. Choosing PLAYER_SELECT allows players to select either stitched or guided ad insertion at session-initialization time. The default for players that do not specify an insertion mode is stitched. (STITCHED_ONLY, PLAYER_SELECT)</td>
</tr>
<tr>
    <td><CopyableCode code="live_pre_roll_configuration" /></td>
    <td><code>object</code></td>
    <td>The configuration for pre-roll ad insertion.</td>
</tr>
<tr>
    <td><CopyableCode code="log_configuration" /></td>
    <td><code>object</code></td>
    <td>Defines where AWS Elemental MediaTailor sends logs for the playback configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="manifest_processing_rules" /></td>
    <td><code>object</code></td>
    <td>The configuration for manifest processing rules. Manifest processing rules enable customization of the personalized manifests created by MediaTailor.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The identifier for the playback configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="personalization_threshold_seconds" /></td>
    <td><code>integer</code></td>
    <td>Defines the maximum duration of underfilled ad time (in seconds) allowed in an ad break. If the duration of underfilled ad time exceeds the personalization threshold, then the personalization of the ad break is abandoned and the underlying content is shown. This feature applies to ad replacement in live and VOD streams, rather than ad insertion, because it relies on an underlying content stream. For more information about ad break behavior, including ad replacement and insertion, see Ad Behavior in AWS Elemental MediaTailor.</td>
</tr>
<tr>
    <td><CopyableCode code="playback_configuration_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) for the playback configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="playback_endpoint_prefix" /></td>
    <td><code>string</code></td>
    <td>The URL that the player accesses to get a manifest from AWS Elemental MediaTailor.</td>
</tr>
<tr>
    <td><CopyableCode code="session_initialization_endpoint_prefix" /></td>
    <td><code>string</code></td>
    <td>The URL that the player uses to initialize a session that uses client-side reporting.</td>
</tr>
<tr>
    <td><CopyableCode code="slate_ad_url" /></td>
    <td><code>string</code></td>
    <td>The URL for a video asset to transcode and use to fill in time that's not used by ads. AWS Elemental MediaTailor shows the slate to fill in gaps in media content. Configuring the slate is optional for non-VPAID playback configurations. For VPAID, the slate is required because MediaTailor provides it in the slots designated for dynamic ad content. The slate must be a high-quality asset that contains both audio and video.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The tags to assign to the playback configuration. Tags are key-value pairs that you can associate with Amazon resources to help with organization, access control, and cost tracking. For more information, see Tagging AWS Elemental MediaTailor Resources.</td>
</tr>
<tr>
    <td><CopyableCode code="transcode_profile_name" /></td>
    <td><code>string</code></td>
    <td>The name that is used to associate this playback configuration with a custom transcode profile. This overrides the dynamic transcoding defaults of MediaTailor. Use this only if you have already set up custom profiles with the help of AWS Support.</td>
</tr>
<tr>
    <td><CopyableCode code="video_content_source_url" /></td>
    <td><code>string</code></td>
    <td>The URL prefix for the parent manifest for the stream, minus the asset ID. The maximum length is 512 characters.</td>
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
    <td><a href="#get_playback_configuration"><CopyableCode code="get_playback_configuration" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves a playback configuration. For information about MediaTailor configurations, see Working with configurations in AWS Elemental MediaTailor.</td>
</tr>
<tr>
    <td><a href="#list_playback_configurations"><CopyableCode code="list_playback_configurations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a></td>
    <td>Retrieves existing playback configurations. For information about MediaTailor configurations, see Working with Configurations in AWS Elemental MediaTailor.</td>
</tr>
<tr>
    <td><a href="#put_playback_configuration"><CopyableCode code="put_playback_configuration" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates a playback configuration. For information about MediaTailor configurations, see Working with configurations in AWS Elemental MediaTailor.</td>
</tr>
<tr>
    <td><a href="#delete_playback_configuration"><CopyableCode code="delete_playback_configuration" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a playback configuration. For information about MediaTailor configurations, see Working with configurations in AWS Elemental MediaTailor.</td>
</tr>
<tr>
    <td><a href="#configure_logs_for_playback_configuration"><CopyableCode code="configure_logs_for_playback_configuration" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-PercentEnabled"><code>PercentEnabled</code></a>, <a href="#parameter-PlaybackConfigurationName"><code>PlaybackConfigurationName</code></a></td>
    <td></td>
    <td>Defines where AWS Elemental MediaTailor sends logs for the playback configuration.</td>
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
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the playback configuration.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of playback configurations that you want MediaTailor to return in response to the current request. If there are more than MaxResults playback configurations, use the value of NextToken in the response to get the next page of results. The default value is 100. MediaTailor uses DynamoDB-based pagination, which means that a response might contain fewer than MaxResults items, including 0 items, even when more results are available. To retrieve all results, you must continue making requests using the NextToken value from each response until the response no longer includes a NextToken value.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>Pagination token returned by the list request when results exceed the maximum allowed. Use the token to fetch the next page of results. For the first ListPlaybackConfigurations request, omit this value. For subsequent requests, get the value of NextToken from the previous response and specify that value for NextToken in the request. Continue making requests until the response no longer includes a NextToken value, which indicates that all results have been retrieved.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_playback_configuration"
    values={[
        { label: 'get_playback_configuration', value: 'get_playback_configuration' },
        { label: 'list_playback_configurations', value: 'list_playback_configurations' }
    ]}
>
<TabItem value="get_playback_configuration">

Retrieves a playback configuration. For information about MediaTailor configurations, see Working with configurations in AWS Elemental MediaTailor.

```sql
SELECT
ad_conditioning_configuration,
ad_decision_server_configuration,
ad_decision_server_url,
avail_suppression,
bumper,
cdn_configuration,
configuration_aliases,
dash_configuration,
function_mapping,
hls_configuration,
insertion_mode,
live_pre_roll_configuration,
log_configuration,
manifest_processing_rules,
name,
personalization_threshold_seconds,
playback_configuration_arn,
playback_endpoint_prefix,
session_initialization_endpoint_prefix,
slate_ad_url,
tags,
transcode_profile_name,
video_content_source_url
FROM aws.mediatailor.playback_configurations
WHERE name = '{{ name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_playback_configurations">

Retrieves existing playback configurations. For information about MediaTailor configurations, see Working with Configurations in AWS Elemental MediaTailor.

```sql
SELECT
ad_conditioning_configuration,
ad_decision_server_configuration,
ad_decision_server_url,
avail_suppression,
bumper,
cdn_configuration,
configuration_aliases,
dash_configuration,
function_mapping,
hls_configuration,
insertion_mode,
live_pre_roll_configuration,
log_configuration,
manifest_processing_rules,
name,
personalization_threshold_seconds,
playback_configuration_arn,
playback_endpoint_prefix,
session_initialization_endpoint_prefix,
slate_ad_url,
tags,
transcode_profile_name,
video_content_source_url
FROM aws.mediatailor.playback_configurations
WHERE region = '{{ region }}' -- required
AND MaxResults = '{{ MaxResults }}'
AND NextToken = '{{ NextToken }}'
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_playback_configuration"
    values={[
        { label: 'put_playback_configuration', value: 'put_playback_configuration' }
    ]}
>
<TabItem value="put_playback_configuration">

Creates a playback configuration. For information about MediaTailor configurations, see Working with configurations in AWS Elemental MediaTailor.

```sql
REPLACE aws.mediatailor.playback_configurations
SET 
AdDecisionServerUrl = '{{ AdDecisionServerUrl }}',
AvailSuppression = '{{ AvailSuppression }}',
Bumper = '{{ Bumper }}',
CdnConfiguration = '{{ CdnConfiguration }}',
ConfigurationAliases = '{{ ConfigurationAliases }}',
DashConfiguration = '{{ DashConfiguration }}',
InsertionMode = '{{ InsertionMode }}',
LivePreRollConfiguration = '{{ LivePreRollConfiguration }}',
ManifestProcessingRules = '{{ ManifestProcessingRules }}',
Name = '{{ Name }}',
PersonalizationThresholdSeconds = {{ PersonalizationThresholdSeconds }},
SlateAdUrl = '{{ SlateAdUrl }}',
Tags = '{{ Tags }}',
TranscodeProfileName = '{{ TranscodeProfileName }}',
VideoContentSourceUrl = '{{ VideoContentSourceUrl }}',
AdConditioningConfiguration = '{{ AdConditioningConfiguration }}',
AdDecisionServerConfiguration = '{{ AdDecisionServerConfiguration }}',
FunctionMapping = '{{ FunctionMapping }}'
WHERE 
region = '{{ region }}' --required
RETURNING
ad_conditioning_configuration,
ad_decision_server_configuration,
ad_decision_server_url,
avail_suppression,
bumper,
cdn_configuration,
configuration_aliases,
dash_configuration,
function_mapping,
hls_configuration,
insertion_mode,
live_pre_roll_configuration,
log_configuration,
manifest_processing_rules,
name,
personalization_threshold_seconds,
playback_configuration_arn,
playback_endpoint_prefix,
session_initialization_endpoint_prefix,
slate_ad_url,
tags,
transcode_profile_name,
video_content_source_url;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_playback_configuration"
    values={[
        { label: 'delete_playback_configuration', value: 'delete_playback_configuration' }
    ]}
>
<TabItem value="delete_playback_configuration">

Deletes a playback configuration. For information about MediaTailor configurations, see Working with configurations in AWS Elemental MediaTailor.

```sql
DELETE FROM aws.mediatailor.playback_configurations
WHERE name = '{{ name }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="configure_logs_for_playback_configuration"
    values={[
        { label: 'configure_logs_for_playback_configuration', value: 'configure_logs_for_playback_configuration' }
    ]}
>
<TabItem value="configure_logs_for_playback_configuration">

Defines where AWS Elemental MediaTailor sends logs for the playback configuration.

```sql
EXEC aws.mediatailor.playback_configurations.configure_logs_for_playback_configuration 
@region='{{ region }}' --required 
@@json=
'{
"PercentEnabled": {{ PercentEnabled }}, 
"PlaybackConfigurationName": "{{ PlaybackConfigurationName }}", 
"EnabledLoggingStrategies": "{{ EnabledLoggingStrategies }}", 
"AdsInteractionLog": "{{ AdsInteractionLog }}", 
"ManifestServiceInteractionLog": "{{ ManifestServiceInteractionLog }}"
}'
;
```
</TabItem>
</Tabs>
