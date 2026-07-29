--- 
title: subscribers
hide_title: false
hide_table_of_contents: false
keywords:
  - subscribers
  - securitylake
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

Creates, updates, deletes, gets or lists a <code>subscribers</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="subscribers" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.securitylake.subscribers" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_subscriber"
    values={[
        { label: 'get_subscriber', value: 'get_subscriber' },
        { label: 'list_subscribers', value: 'list_subscribers' }
    ]}
>
<TabItem value="get_subscriber">

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
    <td><CopyableCode code="access_types" /></td>
    <td><code>array</code></td>
    <td>You can choose to notify subscribers of new objects with an Amazon Simple Queue Service (Amazon SQS) queue or through messaging to an HTTPS endpoint provided by the subscriber. Subscribers can consume data by directly querying Lake Formation tables in your Amazon S3 bucket through services like Amazon Athena. This subscription type is defined as LAKEFORMATION.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the subscriber was created.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_share_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) which uniquely defines the Amazon Web Services RAM resource share. Before accepting the RAM resource share invitation, you can view details related to the RAM resource share. This field is available only for Lake Formation subscribers created after March 8, 2023.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_share_name" /></td>
    <td><code>string</code></td>
    <td>The name of the resource share. (pattern: &lt;code&gt;^LakeFormation(?:-V&#91;0-9&#93;+)-(&#91;a-zA-Z0-9&#93;+)-(&#91;\\\w\-_:/.@=+&#93;*)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="role_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) specifying the role of the subscriber. (pattern: &lt;code&gt;^arn:(aws&#91;a-zA-Z-&#93;*)?:iam::\d&#123;12&#125;:role/?&#91;a-zA-Z_0-9+=,.@\-_/&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="s_3_bucket_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN for the Amazon S3 bucket.</td>
</tr>
<tr>
    <td><CopyableCode code="sources" /></td>
    <td><code>array</code></td>
    <td>Amazon Security Lake supports log and event collection for natively supported Amazon Web Services services. For more information, see the Amazon Security Lake User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="subscriber_arn" /></td>
    <td><code>string</code></td>
    <td>The subscriber ARN of the Amazon Security Lake subscriber account. (pattern: &lt;code&gt;^arn:(aws|aws-us-gov|aws-cn):securitylake:&#91;A-Za-z0-9_/.\-&#93;&#123;0,63&#125;:&#91;A-Za-z0-9_/.\-&#93;&#123;0,63&#125;:&#91;A-Za-z0-9&#93;&#91;A-Za-z0-9_/.\-&#93;&#123;0,127&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="subscriber_description" /></td>
    <td><code>string</code></td>
    <td>The subscriber descriptions for a subscriber account. The description for a subscriber includes subscriberName, accountID, externalID, and subscriberId. (pattern: &lt;code&gt;^&#91;\\\w\-_:/.@=+&#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="subscriber_endpoint" /></td>
    <td><code>string</code></td>
    <td>The subscriber endpoint to which exception messages are posted. (pattern: &lt;code&gt;^&#91;\\\w\-_:/.@=+&#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="subscriber_id" /></td>
    <td><code>string</code></td>
    <td>The subscriber ID of the Amazon Security Lake subscriber account. (pattern: &lt;code&gt;^&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="subscriber_identity" /></td>
    <td><code>object</code></td>
    <td>The Amazon Web Services identity.</td>
</tr>
<tr>
    <td><CopyableCode code="subscriber_name" /></td>
    <td><code>string</code></td>
    <td>The name of your Amazon Security Lake subscriber account. (pattern: &lt;code&gt;^&#91;\\\w\-_:/.@=+&#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="subscriber_status" /></td>
    <td><code>string</code></td>
    <td>The subscriber status of the Amazon Security Lake subscriber account. (ACTIVE, DEACTIVATED, PENDING, READY)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the subscriber was last updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_subscribers">

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
    <td><CopyableCode code="access_types" /></td>
    <td><code>array</code></td>
    <td>You can choose to notify subscribers of new objects with an Amazon Simple Queue Service (Amazon SQS) queue or through messaging to an HTTPS endpoint provided by the subscriber. Subscribers can consume data by directly querying Lake Formation tables in your Amazon S3 bucket through services like Amazon Athena. This subscription type is defined as LAKEFORMATION.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the subscriber was created.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_share_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) which uniquely defines the Amazon Web Services RAM resource share. Before accepting the RAM resource share invitation, you can view details related to the RAM resource share. This field is available only for Lake Formation subscribers created after March 8, 2023.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_share_name" /></td>
    <td><code>string</code></td>
    <td>The name of the resource share. (pattern: &lt;code&gt;^LakeFormation(?:-V&#91;0-9&#93;+)-(&#91;a-zA-Z0-9&#93;+)-(&#91;\\\w\-_:/.@=+&#93;*)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="role_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) specifying the role of the subscriber. (pattern: &lt;code&gt;^arn:(aws&#91;a-zA-Z-&#93;*)?:iam::\d&#123;12&#125;:role/?&#91;a-zA-Z_0-9+=,.@\-_/&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="s_3_bucket_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN for the Amazon S3 bucket.</td>
</tr>
<tr>
    <td><CopyableCode code="sources" /></td>
    <td><code>array</code></td>
    <td>Amazon Security Lake supports log and event collection for natively supported Amazon Web Services services. For more information, see the Amazon Security Lake User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="subscriber_arn" /></td>
    <td><code>string</code></td>
    <td>The subscriber ARN of the Amazon Security Lake subscriber account. (pattern: &lt;code&gt;^arn:(aws|aws-us-gov|aws-cn):securitylake:&#91;A-Za-z0-9_/.\-&#93;&#123;0,63&#125;:&#91;A-Za-z0-9_/.\-&#93;&#123;0,63&#125;:&#91;A-Za-z0-9&#93;&#91;A-Za-z0-9_/.\-&#93;&#123;0,127&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="subscriber_description" /></td>
    <td><code>string</code></td>
    <td>The subscriber descriptions for a subscriber account. The description for a subscriber includes subscriberName, accountID, externalID, and subscriberId. (pattern: &lt;code&gt;^&#91;\\\w\-_:/.@=+&#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="subscriber_endpoint" /></td>
    <td><code>string</code></td>
    <td>The subscriber endpoint to which exception messages are posted. (pattern: &lt;code&gt;^&#91;\\\w\-_:/.@=+&#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="subscriber_id" /></td>
    <td><code>string</code></td>
    <td>The subscriber ID of the Amazon Security Lake subscriber account. (pattern: &lt;code&gt;^&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="subscriber_identity" /></td>
    <td><code>object</code></td>
    <td>The Amazon Web Services identity.</td>
</tr>
<tr>
    <td><CopyableCode code="subscriber_name" /></td>
    <td><code>string</code></td>
    <td>The name of your Amazon Security Lake subscriber account. (pattern: &lt;code&gt;^&#91;\\\w\-_:/.@=+&#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="subscriber_status" /></td>
    <td><code>string</code></td>
    <td>The subscriber status of the Amazon Security Lake subscriber account. (ACTIVE, DEACTIVATED, PENDING, READY)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the subscriber was last updated.</td>
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
    <td><a href="#get_subscriber"><CopyableCode code="get_subscriber" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-subscriber_id"><code>subscriber_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the subscription information for the specified subscription ID. You can get information about a specific subscriber.</td>
</tr>
<tr>
    <td><a href="#list_subscribers"><CopyableCode code="list_subscribers" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Lists all subscribers for the specific Amazon Security Lake account ID. You can retrieve a list of subscriptions associated with a specific organization or Amazon Web Services account.</td>
</tr>
<tr>
    <td><a href="#create_subscriber"><CopyableCode code="create_subscriber" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-sources"><code>sources</code></a>, <a href="#parameter-subscriberIdentity"><code>subscriberIdentity</code></a>, <a href="#parameter-subscriberName"><code>subscriberName</code></a></td>
    <td></td>
    <td>Creates a subscriber for accounts that are already enabled in Amazon Security Lake. You can create a subscriber with access to data in the current Amazon Web Services Region.</td>
</tr>
<tr>
    <td><a href="#create_subscriber_notification"><CopyableCode code="create_subscriber_notification" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-subscriber_id"><code>subscriber_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-configuration"><code>configuration</code></a></td>
    <td></td>
    <td>Notifies the subscriber when new data is written to the data lake for the sources that the subscriber consumes in Security Lake. You can create only one subscriber notification per subscriber.</td>
</tr>
<tr>
    <td><a href="#update_subscriber_notification"><CopyableCode code="update_subscriber_notification" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-subscriber_id"><code>subscriber_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-configuration"><code>configuration</code></a></td>
    <td></td>
    <td>Updates an existing notification method for the subscription (SQS or HTTPs endpoint) or switches the notification subscription endpoint for a subscriber.</td>
</tr>
<tr>
    <td><a href="#update_subscriber"><CopyableCode code="update_subscriber" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-subscriber_id"><code>subscriber_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates an existing subscription for the given Amazon Security Lake account ID. You can update a subscriber by changing the sources that the subscriber consumes data from.</td>
</tr>
<tr>
    <td><a href="#delete_subscriber"><CopyableCode code="delete_subscriber" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-subscriber_id"><code>subscriber_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the subscription permission and all notification settings for accounts that are already enabled in Amazon Security Lake. When you run DeleteSubscriber, the subscriber will no longer consume data from Security Lake and the subscriber is removed. This operation deletes the subscriber and removes access to data in the current Amazon Web Services Region.</td>
</tr>
<tr>
    <td><a href="#delete_subscriber_notification"><CopyableCode code="delete_subscriber_notification" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-subscriber_id"><code>subscriber_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified subscription notification in Amazon Security Lake for the organization you specify.</td>
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
<tr id="parameter-subscriber_id">
    <td><CopyableCode code="subscriber_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Security Lake subscriber account.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of accounts for which the configuration is displayed.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>If nextToken is returned, there are more results available. You can repeat the call using the returned token to retrieve the next page.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_subscriber"
    values={[
        { label: 'get_subscriber', value: 'get_subscriber' },
        { label: 'list_subscribers', value: 'list_subscribers' }
    ]}
>
<TabItem value="get_subscriber">

Retrieves the subscription information for the specified subscription ID. You can get information about a specific subscriber.

```sql
SELECT
access_types,
created_at,
resource_share_arn,
resource_share_name,
role_arn,
s_3_bucket_arn,
sources,
subscriber_arn,
subscriber_description,
subscriber_endpoint,
subscriber_id,
subscriber_identity,
subscriber_name,
subscriber_status,
updated_at
FROM aws.securitylake.subscribers
WHERE subscriber_id = '{{ subscriber_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_subscribers">

Lists all subscribers for the specific Amazon Security Lake account ID. You can retrieve a list of subscriptions associated with a specific organization or Amazon Web Services account.

```sql
SELECT
access_types,
created_at,
resource_share_arn,
resource_share_name,
role_arn,
s_3_bucket_arn,
sources,
subscriber_arn,
subscriber_description,
subscriber_endpoint,
subscriber_id,
subscriber_identity,
subscriber_name,
subscriber_status,
updated_at
FROM aws.securitylake.subscribers
WHERE region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_subscriber"
    values={[
        { label: 'create_subscriber', value: 'create_subscriber' },
        { label: 'create_subscriber_notification', value: 'create_subscriber_notification' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_subscriber">

Creates a subscriber for accounts that are already enabled in Amazon Security Lake. You can create a subscriber with access to data in the current Amazon Web Services Region.

```sql
INSERT INTO aws.securitylake.subscribers (
accessTypes,
sources,
subscriberDescription,
subscriberIdentity,
subscriberName,
tags,
region
)
SELECT 
'{{ accessTypes }}',
'{{ sources }}' /* required */,
'{{ subscriberDescription }}',
'{{ subscriberIdentity }}' /* required */,
'{{ subscriberName }}' /* required */,
'{{ tags }}',
'{{ region }}'
RETURNING
subscriber
;
```
</TabItem>
<TabItem value="create_subscriber_notification">

Notifies the subscriber when new data is written to the data lake for the sources that the subscriber consumes in Security Lake. You can create only one subscriber notification per subscriber.

```sql
INSERT INTO aws.securitylake.subscribers (
configuration,
subscriber_id,
region
)
SELECT 
'{{ configuration }}' /* required */,
'{{ subscriber_id }}',
'{{ region }}'
RETURNING
subscriber_endpoint
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: subscribers
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the subscribers resource.
    - name: subscriber_id
      value: "{{ subscriber_id }}"
      description: Required parameter for the subscribers resource.
    - name: accessTypes
      value:
        - "{{ accessTypes }}"
    - name: sources
      value:
        - awsLogSource:
            sourceName: "{{ sourceName }}"
            sourceVersion: "{{ sourceVersion }}"
          customLogSource:
            attributes:
              crawlerArn: "{{ crawlerArn }}"
              databaseArn: "{{ databaseArn }}"
              tableArn: "{{ tableArn }}"
            provider:
              location: "{{ location }}"
              roleArn: "{{ roleArn }}"
            sourceName: "{{ sourceName }}"
            sourceVersion: "{{ sourceVersion }}"
    - name: subscriberDescription
      value: "{{ subscriberDescription }}"
    - name: subscriberIdentity
      description: |
        The Amazon Web Services identity.
      value:
        externalId: "{{ externalId }}"
        principal: "{{ principal }}"
    - name: subscriberName
      value: "{{ subscriberName }}"
    - name: tags
      value:
        - key: "{{ key }}"
          value: "{{ value }}"
    - name: configuration
      description: |
        Specify the configurations you want to use for subscriber notification to notify the subscriber when new data is written to the data lake for sources that the subscriber consumes in Security Lake.
      value:
        httpsNotificationConfiguration:
          authorizationApiKeyName: "{{ authorizationApiKeyName }}"
          authorizationApiKeyValue: "{{ authorizationApiKeyValue }}"
          endpoint: "{{ endpoint }}"
          httpMethod: "{{ httpMethod }}"
          targetRoleArn: "{{ targetRoleArn }}"
        sqsNotificationConfiguration: "{{ sqsNotificationConfiguration }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_subscriber_notification"
    values={[
        { label: 'update_subscriber_notification', value: 'update_subscriber_notification' },
        { label: 'update_subscriber', value: 'update_subscriber' }
    ]}
>
<TabItem value="update_subscriber_notification">

Updates an existing notification method for the subscription (SQS or HTTPs endpoint) or switches the notification subscription endpoint for a subscriber.

```sql
UPDATE aws.securitylake.subscribers
SET 
configuration = '{{ configuration }}'
WHERE 
subscriber_id = '{{ subscriber_id }}' --required
AND region = '{{ region }}' --required
AND configuration = '{{ configuration }}' --required
RETURNING
subscriber_endpoint;
```
</TabItem>
<TabItem value="update_subscriber">

Updates an existing subscription for the given Amazon Security Lake account ID. You can update a subscriber by changing the sources that the subscriber consumes data from.

```sql
UPDATE aws.securitylake.subscribers
SET 
sources = '{{ sources }}',
subscriberDescription = '{{ subscriberDescription }}',
subscriberIdentity = '{{ subscriberIdentity }}',
subscriberName = '{{ subscriberName }}'
WHERE 
subscriber_id = '{{ subscriber_id }}' --required
AND region = '{{ region }}' --required
RETURNING
subscriber;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_subscriber"
    values={[
        { label: 'delete_subscriber', value: 'delete_subscriber' }
    ]}
>
<TabItem value="delete_subscriber">

Deletes the subscription permission and all notification settings for accounts that are already enabled in Amazon Security Lake. When you run DeleteSubscriber, the subscriber will no longer consume data from Security Lake and the subscriber is removed. This operation deletes the subscriber and removes access to data in the current Amazon Web Services Region.

```sql
DELETE FROM aws.securitylake.subscribers
WHERE subscriber_id = '{{ subscriber_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="delete_subscriber_notification"
    values={[
        { label: 'delete_subscriber_notification', value: 'delete_subscriber_notification' }
    ]}
>
<TabItem value="delete_subscriber_notification">

Deletes the specified subscription notification in Amazon Security Lake for the organization you specify.

```sql
EXEC aws.securitylake.subscribers.delete_subscriber_notification 
@subscriber_id='{{ subscriber_id }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
</Tabs>
