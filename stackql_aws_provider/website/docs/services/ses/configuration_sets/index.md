--- 
title: configuration_sets
hide_title: false
hide_table_of_contents: false
keywords:
  - configuration_sets
  - ses
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

Creates, updates, deletes, gets or lists a <code>configuration_sets</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="configuration_sets" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ses.configuration_sets" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_configuration_set"
    values={[
        { label: 'describe_configuration_set', value: 'describe_configuration_set' },
        { label: 'list_configuration_sets', value: 'list_configuration_sets' }
    ]}
>
<TabItem value="describe_configuration_set">

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
    <td><CopyableCode code="cloud_watch_destination" /></td>
    <td><code>string</code></td>
    <td>An object that contains the names, default values, and sources of the dimensions associated with an Amazon CloudWatch event destination.</td>
</tr>
<tr>
    <td><CopyableCode code="enabled" /></td>
    <td><code>boolean</code></td>
    <td>Sets whether Amazon SES publishes events to this destination when you send an email with the associated configuration set. Set to true to enable publishing to this destination; set to false to prevent publishing to this destination. The default value is false.</td>
</tr>
<tr>
    <td><CopyableCode code="kinesis_firehose_destination" /></td>
    <td><code>string</code></td>
    <td>An object that contains the delivery stream ARN and the IAM role ARN associated with an Amazon Kinesis Firehose event destination.</td>
</tr>
<tr>
    <td><CopyableCode code="matching_event_types" /></td>
    <td><code>string</code></td>
    <td>The type of email sending events to publish to the event destination. send - The call was successful and Amazon SES is attempting to deliver the email. reject - Amazon SES determined that the email contained a virus and rejected it. bounce - The recipient's mail server permanently rejected the email. This corresponds to a hard bounce. complaint - The recipient marked the email as spam. delivery - Amazon SES successfully delivered the email to the recipient's mail server. open - The recipient received the email and opened it in their email client. click - The recipient clicked one or more links in the email. renderingFailure - Amazon SES did not send the email because of a template rendering issue.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the event destination. The name must meet the following requirements: Contain only ASCII letters (a-z, A-Z), numbers (0-9), underscores (_), or dashes (-). Contain 64 characters or fewer.</td>
</tr>
<tr>
    <td><CopyableCode code="sns_destination" /></td>
    <td><code>string</code></td>
    <td>An object that contains the topic ARN associated with an Amazon Simple Notification Service (Amazon SNS) event destination.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_configuration_sets">

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
    <td>The name of the configuration set. The name must meet the following requirements: Contain only letters (a-z, A-Z), numbers (0-9), underscores (_), or dashes (-). Contain 64 characters or fewer.</td>
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
    <td><a href="#describe_configuration_set"><CopyableCode code="describe_configuration_set" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-ConfigurationSetName"><code>ConfigurationSetName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-ConfigurationSetAttributeNames"><code>ConfigurationSetAttributeNames</code></a></td>
    <td>Returns the details of the specified configuration set. For information about using configuration sets, see the Amazon SES Developer Guide. You can execute this operation no more than once per second.</td>
</tr>
<tr>
    <td><a href="#list_configuration_sets"><CopyableCode code="list_configuration_sets" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-MaxItems"><code>MaxItems</code></a></td>
    <td>Provides a list of the configuration sets associated with your Amazon SES account in the current Amazon Web Services Region. For information about using configuration sets, see Monitoring Your Amazon SES Sending Activity in the Amazon SES Developer Guide. You can execute this operation no more than once per second. This operation returns up to 1,000 configuration sets each time it is run. If your Amazon SES account has more than 1,000 configuration sets, this operation also returns NextToken. You can then execute the ListConfigurationSets operation again, passing the NextToken parameter and the value of the NextToken element to retrieve additional results.</td>
</tr>
<tr>
    <td><a href="#create_configuration_set_event_destination"><CopyableCode code="create_configuration_set_event_destination" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-ConfigurationSetName"><code>ConfigurationSetName</code></a>, <a href="#parameter-EventDestination"><code>EventDestination</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates a configuration set event destination. When you create or update an event destination, you must provide one, and only one, destination. The destination can be CloudWatch, Amazon Kinesis Firehose, or Amazon Simple Notification Service (Amazon SNS). An event destination is the Amazon Web Services service to which Amazon SES publishes the email sending events associated with a configuration set. For information about using configuration sets, see the Amazon SES Developer Guide. You can execute this operation no more than once per second.</td>
</tr>
<tr>
    <td><a href="#create_configuration_set_tracking_options"><CopyableCode code="create_configuration_set_tracking_options" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-ConfigurationSetName"><code>ConfigurationSetName</code></a>, <a href="#parameter-TrackingOptions"><code>TrackingOptions</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates an association between a configuration set and a custom domain for open and click event tracking. By default, images and links used for tracking open and click events are hosted on domains operated by Amazon SES. You can configure a subdomain of your own to handle these events. For information about using custom domains, see the Amazon SES Developer Guide.</td>
</tr>
<tr>
    <td><a href="#create_configuration_set"><CopyableCode code="create_configuration_set" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-ConfigurationSet"><code>ConfigurationSet</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates a configuration set. Configuration sets enable you to publish email sending events. For information about using configuration sets, see the Amazon SES Developer Guide. You can execute this operation no more than once per second.</td>
</tr>
<tr>
    <td><a href="#update_configuration_set_event_destination"><CopyableCode code="update_configuration_set_event_destination" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-ConfigurationSetName"><code>ConfigurationSetName</code></a>, <a href="#parameter-EventDestination"><code>EventDestination</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates the event destination of a configuration set. Event destinations are associated with configuration sets, which enable you to publish email sending events to Amazon CloudWatch, Amazon Kinesis Firehose, or Amazon Simple Notification Service (Amazon SNS). For information about using configuration sets, see Monitoring Your Amazon SES Sending Activity in the Amazon SES Developer Guide. When you create or update an event destination, you must provide one, and only one, destination. The destination can be Amazon CloudWatch, Amazon Kinesis Firehose, or Amazon Simple Notification Service (Amazon SNS). You can execute this operation no more than once per second.</td>
</tr>
<tr>
    <td><a href="#update_configuration_set_tracking_options"><CopyableCode code="update_configuration_set_tracking_options" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-ConfigurationSetName"><code>ConfigurationSetName</code></a>, <a href="#parameter-TrackingOptions"><code>TrackingOptions</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Modifies an association between a configuration set and a custom domain for open and click event tracking. By default, images and links used for tracking open and click events are hosted on domains operated by Amazon SES. You can configure a subdomain of your own to handle these events. For information about using custom domains, see the Amazon SES Developer Guide.</td>
</tr>
<tr>
    <td><a href="#update_configuration_set_reputation_metrics_enabled"><CopyableCode code="update_configuration_set_reputation_metrics_enabled" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-ConfigurationSetName"><code>ConfigurationSetName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Enabled"><code>Enabled</code></a></td>
    <td>Enables or disables the publishing of reputation metrics for emails sent using a specific configuration set in a given Amazon Web Services Region. Reputation metrics include bounce and complaint rates. These metrics are published to Amazon CloudWatch. By using CloudWatch, you can create alarms when bounce or complaint rates exceed certain thresholds. You can execute this operation no more than once per second.</td>
</tr>
<tr>
    <td><a href="#put_configuration_set_delivery_options"><CopyableCode code="put_configuration_set_delivery_options" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-ConfigurationSetName"><code>ConfigurationSetName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DeliveryOptions"><code>DeliveryOptions</code></a></td>
    <td>Adds or updates the delivery options for a configuration set.</td>
</tr>
<tr>
    <td><a href="#delete_configuration_set_event_destination"><CopyableCode code="delete_configuration_set_event_destination" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-ConfigurationSetName"><code>ConfigurationSetName</code></a>, <a href="#parameter-EventDestinationName"><code>EventDestinationName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a configuration set event destination. Configuration set event destinations are associated with configuration sets, which enable you to publish email sending events. For information about using configuration sets, see the Amazon SES Developer Guide. You can execute this operation no more than once per second.</td>
</tr>
<tr>
    <td><a href="#delete_configuration_set"><CopyableCode code="delete_configuration_set" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-ConfigurationSetName"><code>ConfigurationSetName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a configuration set. Configuration sets enable you to publish email sending events. For information about using configuration sets, see the Amazon SES Developer Guide. You can execute this operation no more than once per second.</td>
</tr>
<tr>
    <td><a href="#delete_configuration_set_tracking_options"><CopyableCode code="delete_configuration_set_tracking_options" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-ConfigurationSetName"><code>ConfigurationSetName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an association between a configuration set and a custom domain for open and click event tracking. By default, images and links used for tracking open and click events are hosted on domains operated by Amazon SES. You can configure a subdomain of your own to handle these events. For information about using custom domains, see the Amazon SES Developer Guide. Deleting this kind of association results in emails sent using the specified configuration set to capture open and click events using the standard, Amazon SES-operated domains.</td>
</tr>
<tr>
    <td><a href="#update_configuration_set_sending_enabled"><CopyableCode code="update_configuration_set_sending_enabled" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-ConfigurationSetName"><code>ConfigurationSetName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Enabled"><code>Enabled</code></a></td>
    <td>Enables or disables email sending for messages sent using a specific configuration set in a given Amazon Web Services Region. You can use this operation in conjunction with Amazon CloudWatch alarms to temporarily pause email sending for a configuration set when the reputation metrics for that configuration set (such as your bounce on complaint rate) exceed certain thresholds. You can execute this operation no more than once per second.</td>
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
<tr id="parameter-ConfigurationSet">
    <td><CopyableCode code="ConfigurationSet" /></td>
    <td><code>object</code></td>
    <td>A data structure that contains the name of the configuration set.</td>
</tr>
<tr id="parameter-ConfigurationSetName">
    <td><CopyableCode code="ConfigurationSetName" /></td>
    <td><code>string</code></td>
    <td>The name of the configuration set to update.</td>
</tr>
<tr id="parameter-EventDestination">
    <td><CopyableCode code="EventDestination" /></td>
    <td><code>object</code></td>
    <td>The event destination object.</td>
</tr>
<tr id="parameter-EventDestinationName">
    <td><CopyableCode code="EventDestinationName" /></td>
    <td><code>string</code></td>
    <td>The name of the event destination to delete.</td>
</tr>
<tr id="parameter-TrackingOptions">
    <td><CopyableCode code="TrackingOptions" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-ConfigurationSetAttributeNames">
    <td><CopyableCode code="ConfigurationSetAttributeNames" /></td>
    <td><code>array</code></td>
    <td>A list of configuration set attributes to return.</td>
</tr>
<tr id="parameter-DeliveryOptions">
    <td><CopyableCode code="DeliveryOptions" /></td>
    <td><code>object</code></td>
    <td>Specifies whether messages that use the configuration set are required to use Transport Layer Security (TLS).</td>
</tr>
<tr id="parameter-Enabled">
    <td><CopyableCode code="Enabled" /></td>
    <td><code>boolean</code></td>
    <td>Describes whether email sending is enabled or disabled for the configuration set.</td>
</tr>
<tr id="parameter-MaxItems">
    <td><CopyableCode code="MaxItems" /></td>
    <td><code>integer</code></td>
    <td>The number of configuration sets to return.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>A token returned from a previous call to ListConfigurationSets to indicate the position of the configuration set in the configuration set list.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_configuration_set"
    values={[
        { label: 'describe_configuration_set', value: 'describe_configuration_set' },
        { label: 'list_configuration_sets', value: 'list_configuration_sets' }
    ]}
>
<TabItem value="describe_configuration_set">

Returns the details of the specified configuration set. For information about using configuration sets, see the Amazon SES Developer Guide. You can execute this operation no more than once per second.

```sql
SELECT
cloud_watch_destination,
enabled,
kinesis_firehose_destination,
matching_event_types,
name,
sns_destination
FROM aws.ses.configuration_sets
WHERE ConfigurationSetName = '{{ ConfigurationSetName }}' -- required
AND region = '{{ region }}' -- required
AND ConfigurationSetAttributeNames = '{{ ConfigurationSetAttributeNames }}'
;
```
</TabItem>
<TabItem value="list_configuration_sets">

Provides a list of the configuration sets associated with your Amazon SES account in the current Amazon Web Services Region. For information about using configuration sets, see Monitoring Your Amazon SES Sending Activity in the Amazon SES Developer Guide. You can execute this operation no more than once per second. This operation returns up to 1,000 configuration sets each time it is run. If your Amazon SES account has more than 1,000 configuration sets, this operation also returns NextToken. You can then execute the ListConfigurationSets operation again, passing the NextToken parameter and the value of the NextToken element to retrieve additional results.

```sql
SELECT
name
FROM aws.ses.configuration_sets
WHERE region = '{{ region }}' -- required
AND NextToken = '{{ NextToken }}'
AND MaxItems = '{{ MaxItems }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_configuration_set_event_destination"
    values={[
        { label: 'create_configuration_set_event_destination', value: 'create_configuration_set_event_destination' },
        { label: 'create_configuration_set_tracking_options', value: 'create_configuration_set_tracking_options' },
        { label: 'create_configuration_set', value: 'create_configuration_set' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_configuration_set_event_destination">

Creates a configuration set event destination. When you create or update an event destination, you must provide one, and only one, destination. The destination can be CloudWatch, Amazon Kinesis Firehose, or Amazon Simple Notification Service (Amazon SNS). An event destination is the Amazon Web Services service to which Amazon SES publishes the email sending events associated with a configuration set. For information about using configuration sets, see the Amazon SES Developer Guide. You can execute this operation no more than once per second.

```sql
INSERT INTO aws.ses.configuration_sets (
ConfigurationSetName,
EventDestination,
region
)
SELECT 
'{{ ConfigurationSetName }}',
'{{ EventDestination }}',
'{{ region }}'
;
```
</TabItem>
<TabItem value="create_configuration_set_tracking_options">

Creates an association between a configuration set and a custom domain for open and click event tracking. By default, images and links used for tracking open and click events are hosted on domains operated by Amazon SES. You can configure a subdomain of your own to handle these events. For information about using custom domains, see the Amazon SES Developer Guide.

```sql
INSERT INTO aws.ses.configuration_sets (
ConfigurationSetName,
TrackingOptions,
region
)
SELECT 
'{{ ConfigurationSetName }}',
'{{ TrackingOptions }}',
'{{ region }}'
;
```
</TabItem>
<TabItem value="create_configuration_set">

Creates a configuration set. Configuration sets enable you to publish email sending events. For information about using configuration sets, see the Amazon SES Developer Guide. You can execute this operation no more than once per second.

```sql
INSERT INTO aws.ses.configuration_sets (
ConfigurationSet,
region
)
SELECT 
'{{ ConfigurationSet }}',
'{{ region }}'
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: configuration_sets
  props:
    - name: ConfigurationSetName
      value: "{{ ConfigurationSetName }}"
      description: Required parameter for the configuration_sets resource.
    - name: EventDestination
      value: "{{ EventDestination }}"
      description: Required parameter for the configuration_sets resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the configuration_sets resource.
    - name: TrackingOptions
      value: "{{ TrackingOptions }}"
      description: Required parameter for the configuration_sets resource.
    - name: ConfigurationSet
      value: "{{ ConfigurationSet }}"
      description: Required parameter for the configuration_sets resource.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_configuration_set_event_destination"
    values={[
        { label: 'update_configuration_set_event_destination', value: 'update_configuration_set_event_destination' },
        { label: 'update_configuration_set_tracking_options', value: 'update_configuration_set_tracking_options' },
        { label: 'update_configuration_set_reputation_metrics_enabled', value: 'update_configuration_set_reputation_metrics_enabled' }
    ]}
>
<TabItem value="update_configuration_set_event_destination">

Updates the event destination of a configuration set. Event destinations are associated with configuration sets, which enable you to publish email sending events to Amazon CloudWatch, Amazon Kinesis Firehose, or Amazon Simple Notification Service (Amazon SNS). For information about using configuration sets, see Monitoring Your Amazon SES Sending Activity in the Amazon SES Developer Guide. When you create or update an event destination, you must provide one, and only one, destination. The destination can be Amazon CloudWatch, Amazon Kinesis Firehose, or Amazon Simple Notification Service (Amazon SNS). You can execute this operation no more than once per second.

```sql
UPDATE aws.ses.configuration_sets
SET 
-- No updatable properties
WHERE 
ConfigurationSetName = '{{ ConfigurationSetName }}' --required
AND EventDestination = '{{ EventDestination }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
<TabItem value="update_configuration_set_tracking_options">

Modifies an association between a configuration set and a custom domain for open and click event tracking. By default, images and links used for tracking open and click events are hosted on domains operated by Amazon SES. You can configure a subdomain of your own to handle these events. For information about using custom domains, see the Amazon SES Developer Guide.

```sql
UPDATE aws.ses.configuration_sets
SET 
-- No updatable properties
WHERE 
ConfigurationSetName = '{{ ConfigurationSetName }}' --required
AND TrackingOptions = '{{ TrackingOptions }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
<TabItem value="update_configuration_set_reputation_metrics_enabled">

Enables or disables the publishing of reputation metrics for emails sent using a specific configuration set in a given Amazon Web Services Region. Reputation metrics include bounce and complaint rates. These metrics are published to Amazon CloudWatch. By using CloudWatch, you can create alarms when bounce or complaint rates exceed certain thresholds. You can execute this operation no more than once per second.

```sql
UPDATE aws.ses.configuration_sets
SET 
-- No updatable properties
WHERE 
ConfigurationSetName = '{{ ConfigurationSetName }}' --required
AND region = '{{ region }}' --required
AND Enabled = {{ Enabled}};
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_configuration_set_delivery_options"
    values={[
        { label: 'put_configuration_set_delivery_options', value: 'put_configuration_set_delivery_options' }
    ]}
>
<TabItem value="put_configuration_set_delivery_options">

Adds or updates the delivery options for a configuration set.

```sql
REPLACE aws.ses.configuration_sets
SET 
-- No updatable properties
WHERE 
ConfigurationSetName = '{{ ConfigurationSetName }}' --required
AND region = '{{ region }}' --required
AND DeliveryOptions = '{{ DeliveryOptions}}';
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_configuration_set_event_destination"
    values={[
        { label: 'delete_configuration_set_event_destination', value: 'delete_configuration_set_event_destination' },
        { label: 'delete_configuration_set', value: 'delete_configuration_set' }
    ]}
>
<TabItem value="delete_configuration_set_event_destination">

Deletes a configuration set event destination. Configuration set event destinations are associated with configuration sets, which enable you to publish email sending events. For information about using configuration sets, see the Amazon SES Developer Guide. You can execute this operation no more than once per second.

```sql
DELETE FROM aws.ses.configuration_sets
WHERE ConfigurationSetName = '{{ ConfigurationSetName }}' --required
AND EventDestinationName = '{{ EventDestinationName }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
<TabItem value="delete_configuration_set">

Deletes a configuration set. Configuration sets enable you to publish email sending events. For information about using configuration sets, see the Amazon SES Developer Guide. You can execute this operation no more than once per second.

```sql
DELETE FROM aws.ses.configuration_sets
WHERE ConfigurationSetName = '{{ ConfigurationSetName }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="delete_configuration_set_tracking_options"
    values={[
        { label: 'delete_configuration_set_tracking_options', value: 'delete_configuration_set_tracking_options' },
        { label: 'update_configuration_set_sending_enabled', value: 'update_configuration_set_sending_enabled' }
    ]}
>
<TabItem value="delete_configuration_set_tracking_options">

Deletes an association between a configuration set and a custom domain for open and click event tracking. By default, images and links used for tracking open and click events are hosted on domains operated by Amazon SES. You can configure a subdomain of your own to handle these events. For information about using custom domains, see the Amazon SES Developer Guide. Deleting this kind of association results in emails sent using the specified configuration set to capture open and click events using the standard, Amazon SES-operated domains.

```sql
EXEC aws.ses.configuration_sets.delete_configuration_set_tracking_options 
@ConfigurationSetName='{{ ConfigurationSetName }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
<TabItem value="update_configuration_set_sending_enabled">

Enables or disables email sending for messages sent using a specific configuration set in a given Amazon Web Services Region. You can use this operation in conjunction with Amazon CloudWatch alarms to temporarily pause email sending for a configuration set when the reputation metrics for that configuration set (such as your bounce on complaint rate) exceed certain thresholds. You can execute this operation no more than once per second.

```sql
EXEC aws.ses.configuration_sets.update_configuration_set_sending_enabled 
@ConfigurationSetName='{{ ConfigurationSetName }}' --required, 
@region='{{ region }}' --required, 
@Enabled={{ Enabled }}
;
```
</TabItem>
</Tabs>
