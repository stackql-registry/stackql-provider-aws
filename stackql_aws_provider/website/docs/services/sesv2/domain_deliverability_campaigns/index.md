--- 
title: domain_deliverability_campaigns
hide_title: false
hide_table_of_contents: false
keywords:
  - domain_deliverability_campaigns
  - sesv2
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

Creates, updates, deletes, gets or lists a <code>domain_deliverability_campaigns</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="domain_deliverability_campaigns" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sesv2.domain_deliverability_campaigns" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_domain_deliverability_campaigns"
    values={[
        { label: 'list_domain_deliverability_campaigns', value: 'list_domain_deliverability_campaigns' },
        { label: 'get_domain_deliverability_campaign', value: 'get_domain_deliverability_campaign' }
    ]}
>
<TabItem value="list_domain_deliverability_campaigns">

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
    <td><CopyableCode code="DomainDeliverabilityCampaigns" /></td>
    <td><code>array</code></td>
    <td>An array of responses, one for each campaign that used the domain to send email during the specified time range.</td>
</tr>
<tr>
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>A token that’s returned from a previous call to the ListDomainDeliverabilityCampaigns operation. This token indicates the position of the campaign in the list of campaigns.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_domain_deliverability_campaign">

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
    <td><CopyableCode code="CampaignId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the campaign. The Deliverability dashboard automatically generates and assigns this identifier to a campaign.</td>
</tr>
<tr>
    <td><CopyableCode code="DeleteRate" /></td>
    <td><code>number (double)</code></td>
    <td>The percentage of email messages that were deleted by recipients, without being opened first. Due to technical limitations, this value only includes recipients who opened the message by using an email client that supports images.</td>
</tr>
<tr>
    <td><CopyableCode code="Esps" /></td>
    <td><code>array</code></td>
    <td>The major email providers who handled the email message.</td>
</tr>
<tr>
    <td><CopyableCode code="FirstSeenDateTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The first time when the email message was delivered to any recipient's inbox. This value can help you determine how long it took for a campaign to deliver an email message.</td>
</tr>
<tr>
    <td><CopyableCode code="FromAddress" /></td>
    <td><code>string</code></td>
    <td>The verified email address that the email message was sent from.</td>
</tr>
<tr>
    <td><CopyableCode code="ImageUrl" /></td>
    <td><code>string</code></td>
    <td>The URL of an image that contains a snapshot of the email message that was sent.</td>
</tr>
<tr>
    <td><CopyableCode code="InboxCount" /></td>
    <td><code>integer (int64)</code></td>
    <td>The number of email messages that were delivered to recipients’ inboxes.</td>
</tr>
<tr>
    <td><CopyableCode code="LastSeenDateTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The last time when the email message was delivered to any recipient's inbox. This value can help you determine how long it took for a campaign to deliver an email message.</td>
</tr>
<tr>
    <td><CopyableCode code="ProjectedVolume" /></td>
    <td><code>integer (int64)</code></td>
    <td>The projected number of recipients that the email message was sent to.</td>
</tr>
<tr>
    <td><CopyableCode code="ReadDeleteRate" /></td>
    <td><code>number (double)</code></td>
    <td>The percentage of email messages that were opened and then deleted by recipients. Due to technical limitations, this value only includes recipients who opened the message by using an email client that supports images.</td>
</tr>
<tr>
    <td><CopyableCode code="ReadRate" /></td>
    <td><code>number (double)</code></td>
    <td>The percentage of email messages that were opened by recipients. Due to technical limitations, this value only includes recipients who opened the message by using an email client that supports images.</td>
</tr>
<tr>
    <td><CopyableCode code="SendingIps" /></td>
    <td><code>array</code></td>
    <td>The IP addresses that were used to send the email message.</td>
</tr>
<tr>
    <td><CopyableCode code="SpamCount" /></td>
    <td><code>integer (int64)</code></td>
    <td>The number of email messages that were delivered to recipients' spam or junk mail folders.</td>
</tr>
<tr>
    <td><CopyableCode code="Subject" /></td>
    <td><code>string</code></td>
    <td>The subject line, or title, of the email message.</td>
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
    <td><a href="#list_domain_deliverability_campaigns"><CopyableCode code="list_domain_deliverability_campaigns" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-StartDate"><code>StartDate</code></a>, <a href="#parameter-EndDate"><code>EndDate</code></a>, <a href="#parameter-subscribed_domain"><code>subscribed_domain</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-PageSize"><code>PageSize</code></a></td>
    <td>Retrieve deliverability data for all the campaigns that used a specific domain to send email during a specified time range. This data is available for a domain only if you enabled the Deliverability dashboard for the domain.</td>
</tr>
<tr>
    <td><a href="#get_domain_deliverability_campaign"><CopyableCode code="get_domain_deliverability_campaign" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-campaign_id"><code>campaign_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieve all the deliverability data for a specific campaign. This data is available for a campaign only if the campaign sent email by using a domain that the Deliverability dashboard is enabled for.</td>
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
<tr id="parameter-EndDate">
    <td><CopyableCode code="EndDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The last day that you want to obtain deliverability data for. This value has to be less than or equal to 30 days after the value of the StartDate parameter.</td>
</tr>
<tr id="parameter-StartDate">
    <td><CopyableCode code="StartDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The first day that you want to obtain deliverability data for.</td>
</tr>
<tr id="parameter-campaign_id">
    <td><CopyableCode code="campaign_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the campaign. The Deliverability dashboard automatically generates and assigns this identifier to a campaign.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-subscribed_domain">
    <td><CopyableCode code="subscribed_domain" /></td>
    <td><code>string</code></td>
    <td>The domain to obtain deliverability data for.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>A token that’s returned from a previous call to the ListDomainDeliverabilityCampaigns operation. This token indicates the position of a campaign in the list of campaigns.</td>
</tr>
<tr id="parameter-PageSize">
    <td><CopyableCode code="PageSize" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to include in response to a single call to the ListDomainDeliverabilityCampaigns operation. If the number of results is larger than the number that you specify in this parameter, the response includes a NextToken element, which you can use to obtain additional results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_domain_deliverability_campaigns"
    values={[
        { label: 'list_domain_deliverability_campaigns', value: 'list_domain_deliverability_campaigns' },
        { label: 'get_domain_deliverability_campaign', value: 'get_domain_deliverability_campaign' }
    ]}
>
<TabItem value="list_domain_deliverability_campaigns">

Retrieve deliverability data for all the campaigns that used a specific domain to send email during a specified time range. This data is available for a domain only if you enabled the Deliverability dashboard for the domain.

```sql
SELECT
DomainDeliverabilityCampaigns,
NextToken
FROM aws.sesv2.domain_deliverability_campaigns
WHERE StartDate = '{{ StartDate }}' -- required
AND EndDate = '{{ EndDate }}' -- required
AND subscribed_domain = '{{ subscribed_domain }}' -- required
AND region = '{{ region }}' -- required
AND NextToken = '{{ NextToken }}'
AND PageSize = '{{ PageSize }}'
;
```
</TabItem>
<TabItem value="get_domain_deliverability_campaign">

Retrieve all the deliverability data for a specific campaign. This data is available for a campaign only if the campaign sent email by using a domain that the Deliverability dashboard is enabled for.

```sql
SELECT
CampaignId,
DeleteRate,
Esps,
FirstSeenDateTime,
FromAddress,
ImageUrl,
InboxCount,
LastSeenDateTime,
ProjectedVolume,
ReadDeleteRate,
ReadRate,
SendingIps,
SpamCount,
Subject
FROM aws.sesv2.domain_deliverability_campaigns
WHERE campaign_id = '{{ campaign_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
