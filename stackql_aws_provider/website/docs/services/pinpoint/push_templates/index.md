--- 
title: push_templates
hide_title: false
hide_table_of_contents: false
keywords:
  - push_templates
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

Creates, updates, deletes, gets or lists a <code>push_templates</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="push_templates" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.pinpoint.push_templates" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_push_template"
    values={[
        { label: 'get_push_template', value: 'get_push_template' }
    ]}
>
<TabItem value="get_push_template">

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
    <td><CopyableCode code="adm" /></td>
    <td><code>object</code></td>
    <td>The message template that's used for the ADM (Amazon Device Messaging) channel. This message template overrides the default template for push notification channels (DefaultPushNotificationTemplate).</td>
</tr>
<tr>
    <td><CopyableCode code="apns" /></td>
    <td><code>object</code></td>
    <td>The message template that's used for the APNs (Apple Push Notification service) channel. This message template overrides the default template for push notification channels (DefaultPushNotificationTemplate).</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the message template.</td>
</tr>
<tr>
    <td><CopyableCode code="baidu" /></td>
    <td><code>object</code></td>
    <td>The message template that's used for the Baidu (Baidu Cloud Push) channel. This message template overrides the default template for push notification channels (DefaultPushNotificationTemplate).</td>
</tr>
<tr>
    <td><CopyableCode code="creation_date" /></td>
    <td><code>string</code></td>
    <td>The date, in ISO 8601 format, when the message template was created.</td>
</tr>
<tr>
    <td><CopyableCode code="default" /></td>
    <td><code>object</code></td>
    <td>The default message template that's used for push notification channels.</td>
</tr>
<tr>
    <td><CopyableCode code="default_substitutions" /></td>
    <td><code>string</code></td>
    <td>The JSON object that specifies the default values that are used for message variables in the message template. This object is a set of key-value pairs. Each key defines a message variable in the template. The corresponding value defines the default value for that variable.</td>
</tr>
<tr>
    <td><CopyableCode code="gcm" /></td>
    <td><code>object</code></td>
    <td>The message template that's used for the GCM channel, which is used to send notifications through the Firebase Cloud Messaging (FCM), formerly Google Cloud Messaging (GCM), service. This message template overrides the default template for push notification channels (DefaultPushNotificationTemplate).</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_date" /></td>
    <td><code>string</code></td>
    <td>The date, in ISO 8601 format, when the message template was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="recommender_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the recommender model that's used by the message template.</td>
</tr>
<tr>
    <td><CopyableCode code="template_description" /></td>
    <td><code>string</code></td>
    <td>The custom description of the message template.</td>
</tr>
<tr>
    <td><CopyableCode code="template_name" /></td>
    <td><code>string</code></td>
    <td>The name of the message template.</td>
</tr>
<tr>
    <td><CopyableCode code="template_type" /></td>
    <td><code>string</code></td>
    <td>The type of channel that the message template is designed for. For a push notification template, this value is PUSH. (EMAIL, SMS, VOICE, PUSH, INAPP)</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>string</code></td>
    <td>The unique identifier, as an integer, for the active version of the message template, or the version of the template that you specified by using the version parameter in your request.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>A string-to-string map of key-value pairs that identifies the tags that are associated with the message template. Each tag consists of a required tag key and an associated tag value.</td>
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
    <td><a href="#get_push_template"><CopyableCode code="get_push_template" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-template-name"><code>template-name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-version"><code>version</code></a></td>
    <td>Retrieves the content and settings of a message template for messages that are sent through a push notification channel.</td>
</tr>
<tr>
    <td><a href="#create_push_template"><CopyableCode code="create_push_template" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-template-name"><code>template-name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-PushNotificationTemplateRequest"><code>PushNotificationTemplateRequest</code></a></td>
    <td></td>
    <td>Creates a message template for messages that are sent through a push notification channel.</td>
</tr>
<tr>
    <td><a href="#update_push_template"><CopyableCode code="update_push_template" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-template-name"><code>template-name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-PushNotificationTemplateRequest"><code>PushNotificationTemplateRequest</code></a></td>
    <td><a href="#parameter-create-new-version"><code>create-new-version</code></a>, <a href="#parameter-version"><code>version</code></a></td>
    <td>Updates an existing message template for messages that are sent through a push notification channel.</td>
</tr>
<tr>
    <td><a href="#delete_push_template"><CopyableCode code="delete_push_template" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-template-name"><code>template-name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-version"><code>version</code></a></td>
    <td>Deletes a message template for messages that were sent through a push notification channel.</td>
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
<tr id="parameter-template-name">
    <td><CopyableCode code="template-name" /></td>
    <td><code>string</code></td>
    <td>The name of the message template. A template name must start with an alphanumeric character and can contain a maximum of 128 characters. The characters can be alphanumeric characters, underscores (_), or hyphens (-). Template names are case sensitive.</td>
</tr>
<tr id="parameter-create-new-version">
    <td><CopyableCode code="create-new-version" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether to save the updates as a new version of the message template. Valid values are: true, save the updates as a new version; and, false, save the updates to (overwrite) the latest existing version of the template. If you don't specify a value for this parameter, Amazon Pinpoint saves the updates to (overwrites) the latest existing version of the template. If you specify a value of true for this parameter, don't specify a value for the version parameter. Otherwise, an error will occur.</td>
</tr>
<tr id="parameter-version">
    <td><CopyableCode code="version" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the version of the message template to update, retrieve information about, or delete. To retrieve identifiers and other information for all the versions of a template, use the Template Versions resource. If specified, this value must match the identifier for an existing template version. If specified for an update operation, this value must match the identifier for the latest existing version of the template. This restriction helps ensure that race conditions don't occur. If you don't specify a value for this parameter, Amazon Pinpoint does the following: For a get operation, retrieves information about the active version of the template. For an update operation, saves the updates to (overwrites) the latest existing version of the template, if the create-new-version parameter isn't used or is set to false. For a delete operation, deletes the template, including all versions of the template.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_push_template"
    values={[
        { label: 'get_push_template', value: 'get_push_template' }
    ]}
>
<TabItem value="get_push_template">

Retrieves the content and settings of a message template for messages that are sent through a push notification channel.

```sql
SELECT
adm,
apns,
arn,
baidu,
creation_date,
default,
default_substitutions,
gcm,
last_modified_date,
recommender_id,
template_description,
template_name,
template_type,
version,
tags
FROM aws.pinpoint.push_templates
WHERE `template-name` = '{{ template-name }}' -- required
AND region = '{{ region }}' -- required
AND version = '{{ version }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_push_template"
    values={[
        { label: 'create_push_template', value: 'create_push_template' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_push_template">

Creates a message template for messages that are sent through a push notification channel.

```sql
INSERT INTO aws.pinpoint.push_templates (
PushNotificationTemplateRequest,
`template-name`,
region
)
SELECT 
'{{ PushNotificationTemplateRequest }}' /* required */,
'{{ template-name }}',
'{{ region }}'
RETURNING
create_template_message_body
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: push_templates
  props:
    - name: template-name
      value: "{{ template-name }}"
      description: Required parameter for the push_templates resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the push_templates resource.
    - name: PushNotificationTemplateRequest
      description: |
        Specifies the content and settings for a message template that can be used in messages that are sent through a push notification channel.
      value:
        ADM:
          Action: "{{ Action }}"
          Body: "{{ Body }}"
          ImageIconUrl: "{{ ImageIconUrl }}"
          ImageUrl: "{{ ImageUrl }}"
          RawContent: "{{ RawContent }}"
          SmallImageIconUrl: "{{ SmallImageIconUrl }}"
          Sound: "{{ Sound }}"
          Title: "{{ Title }}"
          Url: "{{ Url }}"
        APNS:
          Action: "{{ Action }}"
          Body: "{{ Body }}"
          MediaUrl: "{{ MediaUrl }}"
          RawContent: "{{ RawContent }}"
          Sound: "{{ Sound }}"
          Title: "{{ Title }}"
          Url: "{{ Url }}"
        Baidu:
          Action: "{{ Action }}"
          Body: "{{ Body }}"
          ImageIconUrl: "{{ ImageIconUrl }}"
          ImageUrl: "{{ ImageUrl }}"
          RawContent: "{{ RawContent }}"
          SmallImageIconUrl: "{{ SmallImageIconUrl }}"
          Sound: "{{ Sound }}"
          Title: "{{ Title }}"
          Url: "{{ Url }}"
        Default:
          Action: "{{ Action }}"
          Body: "{{ Body }}"
          Sound: "{{ Sound }}"
          Title: "{{ Title }}"
          Url: "{{ Url }}"
        DefaultSubstitutions: "{{ DefaultSubstitutions }}"
        GCM:
          Action: "{{ Action }}"
          Body: "{{ Body }}"
          ImageIconUrl: "{{ ImageIconUrl }}"
          ImageUrl: "{{ ImageUrl }}"
          RawContent: "{{ RawContent }}"
          SmallImageIconUrl: "{{ SmallImageIconUrl }}"
          Sound: "{{ Sound }}"
          Title: "{{ Title }}"
          Url: "{{ Url }}"
        RecommenderId: "{{ RecommenderId }}"
        tags: "{{ tags }}"
        TemplateDescription: "{{ TemplateDescription }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_push_template"
    values={[
        { label: 'update_push_template', value: 'update_push_template' }
    ]}
>
<TabItem value="update_push_template">

Updates an existing message template for messages that are sent through a push notification channel.

```sql
UPDATE aws.pinpoint.push_templates
SET 
PushNotificationTemplateRequest = '{{ PushNotificationTemplateRequest }}'
WHERE 
`template-name` = '{{ template-name }}' --required
AND region = '{{ region }}' --required
AND PushNotificationTemplateRequest = '{{ PushNotificationTemplateRequest }}' --required
AND `create-new-version` = {{ create-new-version}}
AND version = '{{ version}}'
RETURNING
message_body;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_push_template"
    values={[
        { label: 'delete_push_template', value: 'delete_push_template' }
    ]}
>
<TabItem value="delete_push_template">

Deletes a message template for messages that were sent through a push notification channel.

```sql
DELETE FROM aws.pinpoint.push_templates
WHERE `template-name` = '{{ template-name }}' --required
AND region = '{{ region }}' --required
AND version = '{{ version }}'
;
```
</TabItem>
</Tabs>
