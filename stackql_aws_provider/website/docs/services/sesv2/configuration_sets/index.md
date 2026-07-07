--- 
title: configuration_sets
hide_title: false
hide_table_of_contents: false
keywords:
  - configuration_sets
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

Creates, updates, deletes, gets or lists a <code>configuration_sets</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="configuration_sets" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sesv2.configuration_sets" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_configuration_set"
    values={[
        { label: 'get_configuration_set', value: 'get_configuration_set' },
        { label: 'list_configuration_sets', value: 'list_configuration_sets' }
    ]}
>
<TabItem value="get_configuration_set">

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
    <td><CopyableCode code="ArchivingOptions" /></td>
    <td><code>object</code></td>
    <td>Used to associate a configuration set with a MailManager archive.</td>
</tr>
<tr>
    <td><CopyableCode code="ConfigurationSetName" /></td>
    <td><code>string</code></td>
    <td>The name of a configuration set. Configuration sets are groups of rules that you can apply to the emails you send. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.</td>
</tr>
<tr>
    <td><CopyableCode code="DeliveryOptions" /></td>
    <td><code>object</code></td>
    <td>Used to associate a configuration set with a dedicated IP pool.</td>
</tr>
<tr>
    <td><CopyableCode code="ReputationOptions" /></td>
    <td><code>object</code></td>
    <td>Enable or disable collection of reputation metrics for emails that you send using this configuration set in the current Amazon Web Services Region.</td>
</tr>
<tr>
    <td><CopyableCode code="SendingOptions" /></td>
    <td><code>object</code></td>
    <td>Used to enable or disable email sending for messages that use this configuration set in the current Amazon Web Services Region.</td>
</tr>
<tr>
    <td><CopyableCode code="SuppressionOptions" /></td>
    <td><code>object</code></td>
    <td>An object that contains information about the suppression list preferences for your account.</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>array</code></td>
    <td>An array of objects that define the tags (keys and values) that are associated with the configuration set.</td>
</tr>
<tr>
    <td><CopyableCode code="TrackingOptions" /></td>
    <td><code>object</code></td>
    <td>An object that defines the tracking options for a configuration set. When you use the Amazon SES API v2 to send an email, it contains an invisible image that's used to track when recipients open your email. If your email contains links, those links are changed slightly in order to track when recipients click them. These images and links include references to a domain operated by Amazon Web Services. You can optionally configure the Amazon SES to use a domain that you operate for these images and links.</td>
</tr>
<tr>
    <td><CopyableCode code="VdmOptions" /></td>
    <td><code>object</code></td>
    <td>An object that defines the VDM settings that apply to emails that you send using the configuration set.</td>
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
    <td><CopyableCode code="configuration_set" /></td>
    <td><code>string</code></td>
    <td>An array that contains all of the configuration sets in your Amazon SES account in the current Amazon Web Services Region.</td>
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
    <td><a href="#get_configuration_set"><CopyableCode code="get_configuration_set" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-configuration_set_name"><code>configuration_set_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Get information about an existing configuration set, including the dedicated IP pool that it's associated with, whether or not it's enabled for sending email, and more. Configuration sets are groups of rules that you can apply to the emails you send. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.</td>
</tr>
<tr>
    <td><a href="#list_configuration_sets"><CopyableCode code="list_configuration_sets" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-PageSize"><code>PageSize</code></a></td>
    <td>List all of the configuration sets associated with your account in the current region. Configuration sets are groups of rules that you can apply to the emails you send. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.</td>
</tr>
<tr>
    <td><a href="#create_configuration_set"><CopyableCode code="create_configuration_set" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ConfigurationSetName"><code>ConfigurationSetName</code></a></td>
    <td></td>
    <td>Create a configuration set. Configuration sets are groups of rules that you can apply to the emails that you send. You apply a configuration set to an email by specifying the name of the configuration set when you call the Amazon SES API v2. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.</td>
</tr>
<tr>
    <td><a href="#put_configuration_set_archiving_options"><CopyableCode code="put_configuration_set_archiving_options" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-configuration_set_name"><code>configuration_set_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Associate the configuration set with a MailManager archive. When you send email using the SendEmail or SendBulkEmail operations the message as it will be given to the receiving SMTP server will be archived, along with the recipient information.</td>
</tr>
<tr>
    <td><a href="#delete_configuration_set"><CopyableCode code="delete_configuration_set" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-configuration_set_name"><code>configuration_set_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Delete an existing configuration set. Configuration sets are groups of rules that you can apply to the emails you send. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.</td>
</tr>
<tr>
    <td><a href="#put_configuration_set_delivery_options"><CopyableCode code="put_configuration_set_delivery_options" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-configuration_set_name"><code>configuration_set_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Associate a configuration set with a dedicated IP pool. You can use dedicated IP pools to create groups of dedicated IP addresses for sending specific types of email.</td>
</tr>
<tr>
    <td><a href="#put_configuration_set_reputation_options"><CopyableCode code="put_configuration_set_reputation_options" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-configuration_set_name"><code>configuration_set_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Enable or disable collection of reputation metrics for emails that you send using a particular configuration set in a specific Amazon Web Services Region.</td>
</tr>
<tr>
    <td><a href="#put_configuration_set_sending_options"><CopyableCode code="put_configuration_set_sending_options" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-configuration_set_name"><code>configuration_set_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Enable or disable email sending for messages that use a particular configuration set in a specific Amazon Web Services Region.</td>
</tr>
<tr>
    <td><a href="#put_configuration_set_suppression_options"><CopyableCode code="put_configuration_set_suppression_options" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-configuration_set_name"><code>configuration_set_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Specify the account suppression list preferences for a configuration set.</td>
</tr>
<tr>
    <td><a href="#put_configuration_set_tracking_options"><CopyableCode code="put_configuration_set_tracking_options" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-configuration_set_name"><code>configuration_set_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Specify a custom domain to use for open and click tracking elements in email that you send.</td>
</tr>
<tr>
    <td><a href="#put_configuration_set_vdm_options"><CopyableCode code="put_configuration_set_vdm_options" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-configuration_set_name"><code>configuration_set_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Specify VDM preferences for email that you send using the configuration set. You can execute this operation no more than once per second.</td>
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
<tr id="parameter-configuration_set_name">
    <td><CopyableCode code="configuration_set_name" /></td>
    <td><code>string</code></td>
    <td>The name of the configuration set.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>A token returned from a previous call to ListConfigurationSets to indicate the position in the list of configuration sets.</td>
</tr>
<tr id="parameter-PageSize">
    <td><CopyableCode code="PageSize" /></td>
    <td><code>integer</code></td>
    <td>The number of results to show in a single call to ListConfigurationSets. If the number of results is larger than the number you specified in this parameter, then the response includes a NextToken element, which you can use to obtain additional results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_configuration_set"
    values={[
        { label: 'get_configuration_set', value: 'get_configuration_set' },
        { label: 'list_configuration_sets', value: 'list_configuration_sets' }
    ]}
>
<TabItem value="get_configuration_set">

Get information about an existing configuration set, including the dedicated IP pool that it's associated with, whether or not it's enabled for sending email, and more. Configuration sets are groups of rules that you can apply to the emails you send. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.

```sql
SELECT
ArchivingOptions,
ConfigurationSetName,
DeliveryOptions,
ReputationOptions,
SendingOptions,
SuppressionOptions,
Tags,
TrackingOptions,
VdmOptions
FROM aws.sesv2.configuration_sets
WHERE configuration_set_name = '{{ configuration_set_name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_configuration_sets">

List all of the configuration sets associated with your account in the current region. Configuration sets are groups of rules that you can apply to the emails you send. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.

```sql
SELECT
configuration_set
FROM aws.sesv2.configuration_sets
WHERE region = '{{ region }}' -- required
AND NextToken = '{{ NextToken }}'
AND PageSize = '{{ PageSize }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_configuration_set"
    values={[
        { label: 'create_configuration_set', value: 'create_configuration_set' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_configuration_set">

Create a configuration set. Configuration sets are groups of rules that you can apply to the emails that you send. You apply a configuration set to an email by specifying the name of the configuration set when you call the Amazon SES API v2. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.

```sql
INSERT INTO aws.sesv2.configuration_sets (
ConfigurationSetName,
TrackingOptions,
DeliveryOptions,
ReputationOptions,
SendingOptions,
Tags,
SuppressionOptions,
VdmOptions,
ArchivingOptions,
region
)
SELECT 
'{{ ConfigurationSetName }}' /* required */,
'{{ TrackingOptions }}',
'{{ DeliveryOptions }}',
'{{ ReputationOptions }}',
'{{ SendingOptions }}',
'{{ Tags }}',
'{{ SuppressionOptions }}',
'{{ VdmOptions }}',
'{{ ArchivingOptions }}',
'{{ region }}'
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: configuration_sets
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the configuration_sets resource.
    - name: ConfigurationSetName
      value: "{{ ConfigurationSetName }}"
      description: |
        The name of a configuration set. Configuration sets are groups of rules that you can apply to the emails you send. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.
    - name: TrackingOptions
      description: |
        An object that defines the tracking options for a configuration set. When you use the Amazon SES API v2 to send an email, it contains an invisible image that's used to track when recipients open your email. If your email contains links, those links are changed slightly in order to track when recipients click them. These images and links include references to a domain operated by Amazon Web Services. You can optionally configure the Amazon SES to use a domain that you operate for these images and links.
      value:
        CustomRedirectDomain: "{{ CustomRedirectDomain }}"
        HttpsPolicy: "{{ HttpsPolicy }}"
    - name: DeliveryOptions
      description: |
        Used to associate a configuration set with a dedicated IP pool.
      value:
        TlsPolicy: "{{ TlsPolicy }}"
        SendingPoolName: "{{ SendingPoolName }}"
        MaxDeliverySeconds: {{ MaxDeliverySeconds }}
    - name: ReputationOptions
      description: |
        Enable or disable collection of reputation metrics for emails that you send using this configuration set in the current Amazon Web Services Region.
      value:
        ReputationMetricsEnabled: {{ ReputationMetricsEnabled }}
        LastFreshStart: "{{ LastFreshStart }}"
    - name: SendingOptions
      description: |
        Used to enable or disable email sending for messages that use this configuration set in the current Amazon Web Services Region.
      value:
        SendingEnabled: {{ SendingEnabled }}
    - name: Tags
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
    - name: SuppressionOptions
      description: |
        An object that contains information about the suppression list preferences for your account.
      value:
        SuppressedReasons:
          - "{{ SuppressedReasons }}"
        ValidationOptions:
          ConditionThreshold:
            ConditionThresholdEnabled: "{{ ConditionThresholdEnabled }}"
            OverallConfidenceThreshold:
              ConfidenceVerdictThreshold: "{{ ConfidenceVerdictThreshold }}"
    - name: VdmOptions
      description: |
        An object that defines the VDM settings that apply to emails that you send using the configuration set.
      value:
        DashboardOptions:
          EngagementMetrics: "{{ EngagementMetrics }}"
        GuardianOptions:
          OptimizedSharedDelivery: "{{ OptimizedSharedDelivery }}"
    - name: ArchivingOptions
      description: |
        Used to associate a configuration set with a MailManager archive.
      value:
        ArchiveArn: "{{ ArchiveArn }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_configuration_set_archiving_options"
    values={[
        { label: 'put_configuration_set_archiving_options', value: 'put_configuration_set_archiving_options' }
    ]}
>
<TabItem value="put_configuration_set_archiving_options">

Associate the configuration set with a MailManager archive. When you send email using the SendEmail or SendBulkEmail operations the message as it will be given to the receiving SMTP server will be archived, along with the recipient information.

```sql
REPLACE aws.sesv2.configuration_sets
SET 
ArchiveArn = '{{ ArchiveArn }}'
WHERE 
configuration_set_name = '{{ configuration_set_name }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_configuration_set"
    values={[
        { label: 'delete_configuration_set', value: 'delete_configuration_set' }
    ]}
>
<TabItem value="delete_configuration_set">

Delete an existing configuration set. Configuration sets are groups of rules that you can apply to the emails you send. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.

```sql
DELETE FROM aws.sesv2.configuration_sets
WHERE configuration_set_name = '{{ configuration_set_name }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="put_configuration_set_delivery_options"
    values={[
        { label: 'put_configuration_set_delivery_options', value: 'put_configuration_set_delivery_options' },
        { label: 'put_configuration_set_reputation_options', value: 'put_configuration_set_reputation_options' },
        { label: 'put_configuration_set_sending_options', value: 'put_configuration_set_sending_options' },
        { label: 'put_configuration_set_suppression_options', value: 'put_configuration_set_suppression_options' },
        { label: 'put_configuration_set_tracking_options', value: 'put_configuration_set_tracking_options' },
        { label: 'put_configuration_set_vdm_options', value: 'put_configuration_set_vdm_options' }
    ]}
>
<TabItem value="put_configuration_set_delivery_options">

Associate a configuration set with a dedicated IP pool. You can use dedicated IP pools to create groups of dedicated IP addresses for sending specific types of email.

```sql
EXEC aws.sesv2.configuration_sets.put_configuration_set_delivery_options 
@configuration_set_name='{{ configuration_set_name }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"TlsPolicy": "{{ TlsPolicy }}", 
"SendingPoolName": "{{ SendingPoolName }}", 
"MaxDeliverySeconds": {{ MaxDeliverySeconds }}
}'
;
```
</TabItem>
<TabItem value="put_configuration_set_reputation_options">

Enable or disable collection of reputation metrics for emails that you send using a particular configuration set in a specific Amazon Web Services Region.

```sql
EXEC aws.sesv2.configuration_sets.put_configuration_set_reputation_options 
@configuration_set_name='{{ configuration_set_name }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"ReputationMetricsEnabled": {{ ReputationMetricsEnabled }}
}'
;
```
</TabItem>
<TabItem value="put_configuration_set_sending_options">

Enable or disable email sending for messages that use a particular configuration set in a specific Amazon Web Services Region.

```sql
EXEC aws.sesv2.configuration_sets.put_configuration_set_sending_options 
@configuration_set_name='{{ configuration_set_name }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"SendingEnabled": {{ SendingEnabled }}
}'
;
```
</TabItem>
<TabItem value="put_configuration_set_suppression_options">

Specify the account suppression list preferences for a configuration set.

```sql
EXEC aws.sesv2.configuration_sets.put_configuration_set_suppression_options 
@configuration_set_name='{{ configuration_set_name }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"SuppressedReasons": "{{ SuppressedReasons }}", 
"ValidationOptions": "{{ ValidationOptions }}"
}'
;
```
</TabItem>
<TabItem value="put_configuration_set_tracking_options">

Specify a custom domain to use for open and click tracking elements in email that you send.

```sql
EXEC aws.sesv2.configuration_sets.put_configuration_set_tracking_options 
@configuration_set_name='{{ configuration_set_name }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"CustomRedirectDomain": "{{ CustomRedirectDomain }}", 
"HttpsPolicy": "{{ HttpsPolicy }}"
}'
;
```
</TabItem>
<TabItem value="put_configuration_set_vdm_options">

Specify VDM preferences for email that you send using the configuration set. You can execute this operation no more than once per second.

```sql
EXEC aws.sesv2.configuration_sets.put_configuration_set_vdm_options 
@configuration_set_name='{{ configuration_set_name }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"VdmOptions": "{{ VdmOptions }}"
}'
;
```
</TabItem>
</Tabs>
