--- 
title: topic_rule_destinations
hide_title: false
hide_table_of_contents: false
keywords:
  - topic_rule_destinations
  - iot
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

Creates, updates, deletes, gets or lists a <code>topic_rule_destinations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="topic_rule_destinations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iot.topic_rule_destinations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_topic_rule_destination"
    values={[
        { label: 'get_topic_rule_destination', value: 'get_topic_rule_destination' },
        { label: 'list_topic_rule_destinations', value: 'list_topic_rule_destinations' }
    ]}
>
<TabItem value="get_topic_rule_destination">

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
    <td>The topic rule destination URL.</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the topic rule destination was created.</td>
</tr>
<tr>
    <td><CopyableCode code="httpUrlProperties" /></td>
    <td><code>object</code></td>
    <td>Properties of the HTTP URL.</td>
</tr>
<tr>
    <td><CopyableCode code="lastUpdatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the topic rule destination was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the topic rule destination. Valid values are: IN_PROGRESS A topic rule destination was created but has not been confirmed. You can set status to IN_PROGRESS by calling UpdateTopicRuleDestination. Calling UpdateTopicRuleDestination causes a new confirmation challenge to be sent to your confirmation endpoint. ENABLED Confirmation was completed, and traffic to this destination is allowed. You can set status to DISABLED by calling UpdateTopicRuleDestination. DISABLED Confirmation was completed, and traffic to this destination is not allowed. You can set status to ENABLED by calling UpdateTopicRuleDestination. ERROR Confirmation could not be completed, for example if the confirmation timed out. You can call GetTopicRuleDestination for details about the error. You can set status to IN_PROGRESS by calling UpdateTopicRuleDestination. Calling UpdateTopicRuleDestination causes a new confirmation challenge to be sent to your confirmation endpoint. (ENABLED, IN_PROGRESS, DISABLED, ERROR, DELETING)</td>
</tr>
<tr>
    <td><CopyableCode code="statusReason" /></td>
    <td><code>string</code></td>
    <td>Additional details or reason why the topic rule destination is in the current status.</td>
</tr>
<tr>
    <td><CopyableCode code="vpcProperties" /></td>
    <td><code>object</code></td>
    <td>Properties of the virtual private cloud (VPC) connection.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_topic_rule_destinations">

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
    <td>The topic rule destination ARN.</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the topic rule destination was created.</td>
</tr>
<tr>
    <td><CopyableCode code="httpUrlSummary" /></td>
    <td><code>object</code></td>
    <td>Information about the HTTP URL.</td>
</tr>
<tr>
    <td><CopyableCode code="lastUpdatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the topic rule destination was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the topic rule destination. Valid values are: IN_PROGRESS A topic rule destination was created but has not been confirmed. You can set status to IN_PROGRESS by calling UpdateTopicRuleDestination. Calling UpdateTopicRuleDestination causes a new confirmation challenge to be sent to your confirmation endpoint. ENABLED Confirmation was completed, and traffic to this destination is allowed. You can set status to DISABLED by calling UpdateTopicRuleDestination. DISABLED Confirmation was completed, and traffic to this destination is not allowed. You can set status to ENABLED by calling UpdateTopicRuleDestination. ERROR Confirmation could not be completed, for example if the confirmation timed out. You can call GetTopicRuleDestination for details about the error. You can set status to IN_PROGRESS by calling UpdateTopicRuleDestination. Calling UpdateTopicRuleDestination causes a new confirmation challenge to be sent to your confirmation endpoint. (ENABLED, IN_PROGRESS, DISABLED, ERROR, DELETING)</td>
</tr>
<tr>
    <td><CopyableCode code="statusReason" /></td>
    <td><code>string</code></td>
    <td>The reason the topic rule destination is in the current status.</td>
</tr>
<tr>
    <td><CopyableCode code="vpcDestinationSummary" /></td>
    <td><code>object</code></td>
    <td>Information about the virtual private cloud (VPC) connection.</td>
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
    <td><a href="#get_topic_rule_destination"><CopyableCode code="get_topic_rule_destination" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-arn"><code>arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about a topic rule destination. Requires permission to access the GetTopicRuleDestination action.</td>
</tr>
<tr>
    <td><a href="#list_topic_rule_destinations"><CopyableCode code="list_topic_rule_destinations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Lists all the topic rule destinations in your Amazon Web Services account. Requires permission to access the ListTopicRuleDestinations action.</td>
</tr>
<tr>
    <td><a href="#create_topic_rule_destination"><CopyableCode code="create_topic_rule_destination" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-destinationConfiguration"><code>destinationConfiguration</code></a></td>
    <td></td>
    <td>Creates a topic rule destination. The destination must be confirmed prior to use. Requires permission to access the CreateTopicRuleDestination action.</td>
</tr>
<tr>
    <td><a href="#update_topic_rule_destination"><CopyableCode code="update_topic_rule_destination" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-arn"><code>arn</code></a>, <a href="#parameter-status"><code>status</code></a></td>
    <td></td>
    <td>Updates a topic rule destination. You use this to change the status, endpoint URL, or confirmation URL of the destination. Requires permission to access the UpdateTopicRuleDestination action.</td>
</tr>
<tr>
    <td><a href="#delete_topic_rule_destination"><CopyableCode code="delete_topic_rule_destination" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-arn"><code>arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a topic rule destination. Requires permission to access the DeleteTopicRuleDestination action.</td>
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
<tr id="parameter-arn">
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the topic rule destination to delete.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return at one time.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>To retrieve the next set of results, the nextToken value from a previous response; otherwise null to receive the first set of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_topic_rule_destination"
    values={[
        { label: 'get_topic_rule_destination', value: 'get_topic_rule_destination' },
        { label: 'list_topic_rule_destinations', value: 'list_topic_rule_destinations' }
    ]}
>
<TabItem value="get_topic_rule_destination">

Gets information about a topic rule destination. Requires permission to access the GetTopicRuleDestination action.

```sql
SELECT
arn,
createdAt,
httpUrlProperties,
lastUpdatedAt,
status,
statusReason,
vpcProperties
FROM aws.iot.topic_rule_destinations
WHERE arn = '{{ arn }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_topic_rule_destinations">

Lists all the topic rule destinations in your Amazon Web Services account. Requires permission to access the ListTopicRuleDestinations action.

```sql
SELECT
arn,
createdAt,
httpUrlSummary,
lastUpdatedAt,
status,
statusReason,
vpcDestinationSummary
FROM aws.iot.topic_rule_destinations
WHERE region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_topic_rule_destination"
    values={[
        { label: 'create_topic_rule_destination', value: 'create_topic_rule_destination' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_topic_rule_destination">

Creates a topic rule destination. The destination must be confirmed prior to use. Requires permission to access the CreateTopicRuleDestination action.

```sql
INSERT INTO aws.iot.topic_rule_destinations (
destinationConfiguration,
region
)
SELECT 
'{{ destinationConfiguration }}' /* required */,
'{{ region }}'
RETURNING
topicRuleDestination
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: topic_rule_destinations
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the topic_rule_destinations resource.
    - name: destinationConfiguration
      description: |
        Configuration of the topic rule destination.
      value:
        httpUrlConfiguration:
          confirmationUrl: "{{ confirmationUrl }}"
        vpcConfiguration:
          subnetIds:
            - "{{ subnetIds }}"
          securityGroups:
            - "{{ securityGroups }}"
          vpcId: "{{ vpcId }}"
          roleArn: "{{ roleArn }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_topic_rule_destination"
    values={[
        { label: 'update_topic_rule_destination', value: 'update_topic_rule_destination' }
    ]}
>
<TabItem value="update_topic_rule_destination">

Updates a topic rule destination. You use this to change the status, endpoint URL, or confirmation URL of the destination. Requires permission to access the UpdateTopicRuleDestination action.

```sql
UPDATE aws.iot.topic_rule_destinations
SET 
arn = '{{ arn }}',
status = '{{ status }}'
WHERE 
region = '{{ region }}' --required
AND arn = '{{ arn }}' --required
AND status = '{{ status }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_topic_rule_destination"
    values={[
        { label: 'delete_topic_rule_destination', value: 'delete_topic_rule_destination' }
    ]}
>
<TabItem value="delete_topic_rule_destination">

Deletes a topic rule destination. Requires permission to access the DeleteTopicRuleDestination action.

```sql
DELETE FROM aws.iot.topic_rule_destinations
WHERE arn = '{{ arn }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
