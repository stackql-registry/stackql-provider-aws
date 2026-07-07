--- 
title: campaigns
hide_title: false
hide_table_of_contents: false
keywords:
  - campaigns
  - personalize
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

Creates, updates, deletes, gets or lists a <code>campaigns</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="campaigns" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.personalize.campaigns" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_campaign"
    values={[
        { label: 'describe_campaign', value: 'describe_campaign' },
        { label: 'list_campaigns', value: 'list_campaigns' }
    ]}
>
<TabItem value="describe_campaign">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the campaign. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9&#93;&#91;a-zA-Z0-9\-_&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="campaignArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the campaign. (pattern: &lt;code&gt;arn:(&#91;a-z\d-&#93;+):personalize:.*:.*:.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="campaignConfig" /></td>
    <td><code>object</code></td>
    <td>The configuration details of a campaign.</td>
</tr>
<tr>
    <td><CopyableCode code="creationDateTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time (in Unix format) that the campaign was created.</td>
</tr>
<tr>
    <td><CopyableCode code="failureReason" /></td>
    <td><code>string</code></td>
    <td>If a campaign fails, the reason behind the failure.</td>
</tr>
<tr>
    <td><CopyableCode code="lastUpdatedDateTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time (in Unix format) that the campaign was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="latestCampaignUpdate" /></td>
    <td><code>object</code></td>
    <td>Provides a summary of the properties of a campaign update. For a complete listing, call the DescribeCampaign API. The latestCampaignUpdate field is only returned when the campaign has had at least one UpdateCampaign call.</td>
</tr>
<tr>
    <td><CopyableCode code="minProvisionedTPS" /></td>
    <td><code>integer</code></td>
    <td>Specifies the requested minimum provisioned transactions (recommendations) per second. A high minProvisionedTPS will increase your bill. We recommend starting with 1 for minProvisionedTPS (the default). Track your usage using Amazon CloudWatch metrics, and increase the minProvisionedTPS as necessary.</td>
</tr>
<tr>
    <td><CopyableCode code="solutionVersionArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the solution version the campaign uses. (pattern: &lt;code&gt;arn:(&#91;a-z\d-&#93;+):personalize:.*:.*:.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the campaign. A campaign can be in one of the following states: CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED DELETE PENDING &gt; DELETE IN_PROGRESS</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_campaigns">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the campaign. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9&#93;&#91;a-zA-Z0-9\-_&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="campaignArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the campaign. (pattern: &lt;code&gt;arn:(&#91;a-z\d-&#93;+):personalize:.*:.*:.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="creationDateTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time (in Unix time) that the campaign was created.</td>
</tr>
<tr>
    <td><CopyableCode code="failureReason" /></td>
    <td><code>string</code></td>
    <td>If a campaign fails, the reason behind the failure.</td>
</tr>
<tr>
    <td><CopyableCode code="lastUpdatedDateTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time (in Unix time) that the campaign was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the campaign. A campaign can be in one of the following states: CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED DELETE PENDING &gt; DELETE IN_PROGRESS</td>
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
    <td><a href="#describe_campaign"><CopyableCode code="describe_campaign" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes the given campaign, including its status. A campaign can be in one of the following states: CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED DELETE PENDING &gt; DELETE IN_PROGRESS When the status is CREATE FAILED, the response includes the failureReason key, which describes why. For more information on campaigns, see CreateCampaign.</td>
</tr>
<tr>
    <td><a href="#list_campaigns"><CopyableCode code="list_campaigns" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of campaigns that use the given solution. When a solution is not specified, all the campaigns associated with the account are listed. The response provides the properties for each campaign, including the Amazon Resource Name (ARN). For more information on campaigns, see CreateCampaign.</td>
</tr>
<tr>
    <td><a href="#create_campaign"><CopyableCode code="create_campaign" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-solutionVersionArn"><code>solutionVersionArn</code></a></td>
    <td></td>
    <td>You incur campaign costs while it is active. To avoid unnecessary costs, make sure to delete the campaign when you are finished. For information about campaign costs, see Amazon Personalize pricing. Creates a campaign that deploys a solution version. When a client calls the GetRecommendations and GetPersonalizedRanking APIs, a campaign is specified in the request. Minimum Provisioned TPS and Auto-Scaling A high minProvisionedTPS will increase your cost. We recommend starting with 1 for minProvisionedTPS (the default). Track your usage using Amazon CloudWatch metrics, and increase the minProvisionedTPS as necessary. When you create an Amazon Personalize campaign, you can specify the minimum provisioned transactions per second (minProvisionedTPS) for the campaign. This is the baseline transaction throughput for the campaign provisioned by Amazon Personalize. It sets the minimum billing charge for the campaign while it is active. A transaction is a single GetRecommendations or GetPersonalizedRanking request. The default minProvisionedTPS is 1. If your TPS increases beyond the minProvisionedTPS, Amazon Personalize auto-scales the provisioned capacity up and down, but never below minProvisionedTPS. There's a short time delay while the capacity is increased that might cause loss of transactions. When your traffic reduces, capacity returns to the minProvisionedTPS. You are charged for the the minimum provisioned TPS or, if your requests exceed the minProvisionedTPS, the actual TPS. The actual TPS is the total number of recommendation requests you make. We recommend starting with a low minProvisionedTPS, track your usage using Amazon CloudWatch metrics, and then increase the minProvisionedTPS as necessary. For more information about campaign costs, see Amazon Personalize pricing. Status A campaign can be in one of the following states: CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED DELETE PENDING &gt; DELETE IN_PROGRESS To get the campaign status, call DescribeCampaign. Wait until the status of the campaign is ACTIVE before asking the campaign for recommendations. Related APIs ListCampaigns DescribeCampaign UpdateCampaign DeleteCampaign</td>
</tr>
<tr>
    <td><a href="#update_campaign"><CopyableCode code="update_campaign" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-campaignArn"><code>campaignArn</code></a></td>
    <td></td>
    <td>Updates a campaign to deploy a retrained solution version with an existing campaign, change your campaign's minProvisionedTPS, or modify your campaign's configuration. For example, you can set enableMetadataWithRecommendations to true for an existing campaign. To update a campaign to start automatically using the latest solution version, specify the following: For the SolutionVersionArn parameter, specify the Amazon Resource Name (ARN) of your solution in SolutionArn/$LATEST format. In the campaignConfig, set syncWithLatestSolutionVersion to true. To update a campaign, the campaign status must be ACTIVE or CREATE FAILED. Check the campaign status using the DescribeCampaign operation. You can still get recommendations from a campaign while an update is in progress. The campaign will use the previous solution version and campaign configuration to generate recommendations until the latest campaign update status is Active. For more information about updating a campaign, including code samples, see Updating a campaign. For more information about campaigns, see Creating a campaign.</td>
</tr>
<tr>
    <td><a href="#delete_campaign"><CopyableCode code="delete_campaign" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Removes a campaign by deleting the solution deployment. The solution that the campaign is based on is not deleted and can be redeployed when needed. A deleted campaign can no longer be specified in a GetRecommendations request. For information on creating campaigns, see CreateCampaign.</td>
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
    defaultValue="describe_campaign"
    values={[
        { label: 'describe_campaign', value: 'describe_campaign' },
        { label: 'list_campaigns', value: 'list_campaigns' }
    ]}
>
<TabItem value="describe_campaign">

Describes the given campaign, including its status. A campaign can be in one of the following states: CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED DELETE PENDING &gt; DELETE IN_PROGRESS When the status is CREATE FAILED, the response includes the failureReason key, which describes why. For more information on campaigns, see CreateCampaign.

```sql
SELECT
name,
campaignArn,
campaignConfig,
creationDateTime,
failureReason,
lastUpdatedDateTime,
latestCampaignUpdate,
minProvisionedTPS,
solutionVersionArn,
status
FROM aws.personalize.campaigns
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_campaigns">

Returns a list of campaigns that use the given solution. When a solution is not specified, all the campaigns associated with the account are listed. The response provides the properties for each campaign, including the Amazon Resource Name (ARN). For more information on campaigns, see CreateCampaign.

```sql
SELECT
name,
campaignArn,
creationDateTime,
failureReason,
lastUpdatedDateTime,
status
FROM aws.personalize.campaigns
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_campaign"
    values={[
        { label: 'create_campaign', value: 'create_campaign' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_campaign">

You incur campaign costs while it is active. To avoid unnecessary costs, make sure to delete the campaign when you are finished. For information about campaign costs, see Amazon Personalize pricing. Creates a campaign that deploys a solution version. When a client calls the GetRecommendations and GetPersonalizedRanking APIs, a campaign is specified in the request. Minimum Provisioned TPS and Auto-Scaling A high minProvisionedTPS will increase your cost. We recommend starting with 1 for minProvisionedTPS (the default). Track your usage using Amazon CloudWatch metrics, and increase the minProvisionedTPS as necessary. When you create an Amazon Personalize campaign, you can specify the minimum provisioned transactions per second (minProvisionedTPS) for the campaign. This is the baseline transaction throughput for the campaign provisioned by Amazon Personalize. It sets the minimum billing charge for the campaign while it is active. A transaction is a single GetRecommendations or GetPersonalizedRanking request. The default minProvisionedTPS is 1. If your TPS increases beyond the minProvisionedTPS, Amazon Personalize auto-scales the provisioned capacity up and down, but never below minProvisionedTPS. There's a short time delay while the capacity is increased that might cause loss of transactions. When your traffic reduces, capacity returns to the minProvisionedTPS. You are charged for the the minimum provisioned TPS or, if your requests exceed the minProvisionedTPS, the actual TPS. The actual TPS is the total number of recommendation requests you make. We recommend starting with a low minProvisionedTPS, track your usage using Amazon CloudWatch metrics, and then increase the minProvisionedTPS as necessary. For more information about campaign costs, see Amazon Personalize pricing. Status A campaign can be in one of the following states: CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED DELETE PENDING &gt; DELETE IN_PROGRESS To get the campaign status, call DescribeCampaign. Wait until the status of the campaign is ACTIVE before asking the campaign for recommendations. Related APIs ListCampaigns DescribeCampaign UpdateCampaign DeleteCampaign

```sql
INSERT INTO aws.personalize.campaigns (
name,
solutionVersionArn,
minProvisionedTPS,
campaignConfig,
tags,
region
)
SELECT 
'{{ name }}' /* required */,
'{{ solutionVersionArn }}' /* required */,
{{ minProvisionedTPS }},
'{{ campaignConfig }}',
'{{ tags }}',
'{{ region }}'
RETURNING
campaignArn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: campaigns
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the campaigns resource.
    - name: name
      value: "{{ name }}"
      description: |
        A name for the new campaign. The campaign name must be unique within your account.
    - name: solutionVersionArn
      value: "{{ solutionVersionArn }}"
      description: |
        The Amazon Resource Name (ARN) of the trained model to deploy with the campaign. To specify the latest solution version of your solution, specify the ARN of your solution in SolutionArn/$LATEST format. You must use this format if you set syncWithLatestSolutionVersion to True in the CampaignConfig. To deploy a model that isn't the latest solution version of your solution, specify the ARN of the solution version. For more information about automatic campaign updates, see Enabling automatic campaign updates.
    - name: minProvisionedTPS
      value: {{ minProvisionedTPS }}
      description: |
        Specifies the requested minimum provisioned transactions (recommendations) per second that Amazon Personalize will support. A high minProvisionedTPS will increase your bill. We recommend starting with 1 for minProvisionedTPS (the default). Track your usage using Amazon CloudWatch metrics, and increase the minProvisionedTPS as necessary.
    - name: campaignConfig
      description: |
        The configuration details of a campaign.
      value:
        itemExplorationConfig: "{{ itemExplorationConfig }}"
        enableMetadataWithRecommendations: {{ enableMetadataWithRecommendations }}
        syncWithLatestSolutionVersion: {{ syncWithLatestSolutionVersion }}
        rankingInfluence: "{{ rankingInfluence }}"
    - name: tags
      description: |
        A list of tags to apply to the campaign.
      value:
        - tagKey: "{{ tagKey }}"
          tagValue: "{{ tagValue }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_campaign"
    values={[
        { label: 'update_campaign', value: 'update_campaign' }
    ]}
>
<TabItem value="update_campaign">

Updates a campaign to deploy a retrained solution version with an existing campaign, change your campaign's minProvisionedTPS, or modify your campaign's configuration. For example, you can set enableMetadataWithRecommendations to true for an existing campaign. To update a campaign to start automatically using the latest solution version, specify the following: For the SolutionVersionArn parameter, specify the Amazon Resource Name (ARN) of your solution in SolutionArn/$LATEST format. In the campaignConfig, set syncWithLatestSolutionVersion to true. To update a campaign, the campaign status must be ACTIVE or CREATE FAILED. Check the campaign status using the DescribeCampaign operation. You can still get recommendations from a campaign while an update is in progress. The campaign will use the previous solution version and campaign configuration to generate recommendations until the latest campaign update status is Active. For more information about updating a campaign, including code samples, see Updating a campaign. For more information about campaigns, see Creating a campaign.

```sql
UPDATE aws.personalize.campaigns
SET 
campaignArn = '{{ campaignArn }}',
solutionVersionArn = '{{ solutionVersionArn }}',
minProvisionedTPS = {{ minProvisionedTPS }},
campaignConfig = '{{ campaignConfig }}'
WHERE 
region = '{{ region }}' --required
AND campaignArn = '{{ campaignArn }}' --required
RETURNING
campaignArn;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_campaign"
    values={[
        { label: 'delete_campaign', value: 'delete_campaign' }
    ]}
>
<TabItem value="delete_campaign">

Removes a campaign by deleting the solution deployment. The solution that the campaign is based on is not deleted and can be redeployed when needed. A deleted campaign can no longer be specified in a GetRecommendations request. For information on creating campaigns, see CreateCampaign.

```sql
DELETE FROM aws.personalize.campaigns
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
