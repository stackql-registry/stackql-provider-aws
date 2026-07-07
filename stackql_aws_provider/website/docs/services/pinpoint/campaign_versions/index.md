--- 
title: campaign_versions
hide_title: false
hide_table_of_contents: false
keywords:
  - campaign_versions
  - pinpoint
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

Creates, updates, deletes, gets or lists a <code>campaign_versions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="campaign_versions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.pinpoint.campaign_versions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_campaign_version"
    values={[
        { label: 'get_campaign_version', value: 'get_campaign_version' },
        { label: 'get_campaign_versions', value: 'get_campaign_versions' }
    ]}
>
<TabItem value="get_campaign_version">

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
    <td><CopyableCode code="AdditionalTreatments" /></td>
    <td><code>array</code></td>
    <td>An array of responses, one for each treatment that you defined for the campaign, in addition to the default treatment.</td>
</tr>
<tr>
    <td><CopyableCode code="ApplicationId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the application that the campaign applies to.</td>
</tr>
<tr>
    <td><CopyableCode code="Arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the campaign.</td>
</tr>
<tr>
    <td><CopyableCode code="CreationDate" /></td>
    <td><code>string</code></td>
    <td>The date, in ISO 8601 format, when the campaign was created.</td>
</tr>
<tr>
    <td><CopyableCode code="CustomDeliveryConfiguration" /></td>
    <td><code>object</code></td>
    <td>The delivery configuration settings for sending the campaign through a custom channel.</td>
</tr>
<tr>
    <td><CopyableCode code="DefaultState" /></td>
    <td><code>object</code></td>
    <td>The current status of the campaign's default treatment. This value exists only for campaigns that have more than one treatment.</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>The custom description of the campaign.</td>
</tr>
<tr>
    <td><CopyableCode code="HoldoutPercent" /></td>
    <td><code>integer</code></td>
    <td>The allocated percentage of users (segment members) who shouldn't receive messages from the campaign.</td>
</tr>
<tr>
    <td><CopyableCode code="Hook" /></td>
    <td><code>object</code></td>
    <td>The settings for the AWS Lambda function to use as a code hook for the campaign. You can use this hook to customize the segment that's used by the campaign.</td>
</tr>
<tr>
    <td><CopyableCode code="Id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the campaign.</td>
</tr>
<tr>
    <td><CopyableCode code="IsPaused" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether the campaign is paused. A paused campaign doesn't run unless you resume it by changing this value to false.</td>
</tr>
<tr>
    <td><CopyableCode code="LastModifiedDate" /></td>
    <td><code>string</code></td>
    <td>The date, in ISO 8601 format, when the campaign was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="Limits" /></td>
    <td><code>object</code></td>
    <td>The messaging limits for the campaign.</td>
</tr>
<tr>
    <td><CopyableCode code="MessageConfiguration" /></td>
    <td><code>object</code></td>
    <td>The message configuration settings for the campaign.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of the campaign.</td>
</tr>
<tr>
    <td><CopyableCode code="Priority" /></td>
    <td><code>integer</code></td>
    <td>Defines the priority of the campaign, used to decide the order of messages displayed to user if there are multiple messages scheduled to be displayed at the same moment.</td>
</tr>
<tr>
    <td><CopyableCode code="Schedule" /></td>
    <td><code>object</code></td>
    <td>The schedule settings for the campaign.</td>
</tr>
<tr>
    <td><CopyableCode code="SegmentId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the segment that's associated with the campaign.</td>
</tr>
<tr>
    <td><CopyableCode code="SegmentVersion" /></td>
    <td><code>integer</code></td>
    <td>The version number of the segment that's associated with the campaign.</td>
</tr>
<tr>
    <td><CopyableCode code="State" /></td>
    <td><code>object</code></td>
    <td>The current status of the campaign.</td>
</tr>
<tr>
    <td><CopyableCode code="TemplateConfiguration" /></td>
    <td><code>object</code></td>
    <td>The message template that’s used for the campaign.</td>
</tr>
<tr>
    <td><CopyableCode code="TreatmentDescription" /></td>
    <td><code>string</code></td>
    <td>The custom description of the default treatment for the campaign.</td>
</tr>
<tr>
    <td><CopyableCode code="TreatmentName" /></td>
    <td><code>string</code></td>
    <td>The custom name of the default treatment for the campaign, if the campaign has multiple treatments. A treatment is a variation of a campaign that's used for A/B testing.</td>
</tr>
<tr>
    <td><CopyableCode code="Version" /></td>
    <td><code>integer</code></td>
    <td>The version number of the campaign.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>A string-to-string map of key-value pairs that identifies the tags that are associated with the campaign. Each tag consists of a required tag key and an associated tag value.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_campaign_versions">

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
    <td><CopyableCode code="Item" /></td>
    <td><code>array</code></td>
    <td>An array of responses, one for each campaign that's associated with the application.</td>
</tr>
<tr>
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The string to use in a subsequent request to get the next page of results in a paginated response. This value is null if there are no additional pages.</td>
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
    <td><a href="#get_campaign_version"><CopyableCode code="get_campaign_version" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-application-id"><code>application-id</code></a>, <a href="#parameter-campaign-id"><code>campaign-id</code></a>, <a href="#parameter-version"><code>version</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about the status, configuration, and other settings for a specific version of a campaign.</td>
</tr>
<tr>
    <td><a href="#get_campaign_versions"><CopyableCode code="get_campaign_versions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-application-id"><code>application-id</code></a>, <a href="#parameter-campaign-id"><code>campaign-id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-page-size"><code>page-size</code></a>, <a href="#parameter-token"><code>token</code></a></td>
    <td>Retrieves information about the status, configuration, and other settings for all versions of a campaign.</td>
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
<tr id="parameter-application-id">
    <td><CopyableCode code="application-id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the application. This identifier is displayed as the Project ID on the Amazon Pinpoint console.</td>
</tr>
<tr id="parameter-campaign-id">
    <td><CopyableCode code="campaign-id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the campaign.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-version">
    <td><CopyableCode code="version" /></td>
    <td><code>string</code></td>
    <td>The unique version number (Version property) for the campaign version.</td>
</tr>
<tr id="parameter-page-size">
    <td><CopyableCode code="page-size" /></td>
    <td><code>string</code></td>
    <td>The maximum number of items to include in each page of a paginated response. This parameter is not supported for application, campaign, and journey metrics.</td>
</tr>
<tr id="parameter-token">
    <td><CopyableCode code="token" /></td>
    <td><code>string</code></td>
    <td>The NextToken string that specifies which page of results to return in a paginated response.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_campaign_version"
    values={[
        { label: 'get_campaign_version', value: 'get_campaign_version' },
        { label: 'get_campaign_versions', value: 'get_campaign_versions' }
    ]}
>
<TabItem value="get_campaign_version">

Retrieves information about the status, configuration, and other settings for a specific version of a campaign.

```sql
SELECT
AdditionalTreatments,
ApplicationId,
Arn,
CreationDate,
CustomDeliveryConfiguration,
DefaultState,
Description,
HoldoutPercent,
Hook,
Id,
IsPaused,
LastModifiedDate,
Limits,
MessageConfiguration,
Name,
Priority,
Schedule,
SegmentId,
SegmentVersion,
State,
TemplateConfiguration,
TreatmentDescription,
TreatmentName,
Version,
tags
FROM aws.pinpoint.campaign_versions
WHERE `application-id` = '{{ application-id }}' -- required
AND `campaign-id` = '{{ campaign-id }}' -- required
AND version = '{{ version }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="get_campaign_versions">

Retrieves information about the status, configuration, and other settings for all versions of a campaign.

```sql
SELECT
Item,
NextToken
FROM aws.pinpoint.campaign_versions
WHERE `application-id` = '{{ application-id }}' -- required
AND `campaign-id` = '{{ campaign-id }}' -- required
AND region = '{{ region }}' -- required
AND `page-size` = '{{ page-size }}'
AND token = '{{ token }}'
;
```
</TabItem>
</Tabs>
