--- 
title: in_app_templates
hide_title: false
hide_table_of_contents: false
keywords:
  - in_app_templates
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

Creates, updates, deletes, gets or lists an <code>in_app_templates</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="in_app_templates" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.pinpoint.in_app_templates" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_in_app_template"
    values={[
        { label: 'get_in_app_template', value: 'get_in_app_template' }
    ]}
>
<TabItem value="get_in_app_template">

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
    <td>The resource arn of the template.</td>
</tr>
<tr>
    <td><CopyableCode code="content" /></td>
    <td><code>array</code></td>
    <td>The content of the message, can include up to 5 modals. Each modal must contain a message, a header, and background color. ImageUrl and buttons are optional.</td>
</tr>
<tr>
    <td><CopyableCode code="creation_date" /></td>
    <td><code>string</code></td>
    <td>The creation date of the template.</td>
</tr>
<tr>
    <td><CopyableCode code="custom_config" /></td>
    <td><code>object</code></td>
    <td>Custom config to be sent to client.</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_date" /></td>
    <td><code>string</code></td>
    <td>The last modified date of the template.</td>
</tr>
<tr>
    <td><CopyableCode code="layout" /></td>
    <td><code>string</code></td>
    <td>The layout of the message. (BOTTOM_BANNER, TOP_BANNER, OVERLAYS, MOBILE_FEED, MIDDLE_BANNER, CAROUSEL)</td>
</tr>
<tr>
    <td><CopyableCode code="template_description" /></td>
    <td><code>string</code></td>
    <td>The description of the template.</td>
</tr>
<tr>
    <td><CopyableCode code="template_name" /></td>
    <td><code>string</code></td>
    <td>The name of the template.</td>
</tr>
<tr>
    <td><CopyableCode code="template_type" /></td>
    <td><code>string</code></td>
    <td>The type of the template. (EMAIL, SMS, VOICE, PUSH, INAPP)</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>string</code></td>
    <td>The version id of the template.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>A string-to-string map of key-value pairs that defines the tags to associate with the message template. Each tag consists of a required tag key and an associated tag value.</td>
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
    <td><a href="#get_in_app_template"><CopyableCode code="get_in_app_template" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-template-name"><code>template-name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-version"><code>version</code></a></td>
    <td>Retrieves the content and settings of a message template for messages sent through the in-app channel.</td>
</tr>
<tr>
    <td><a href="#create_in_app_template"><CopyableCode code="create_in_app_template" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-template-name"><code>template-name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-InAppTemplateRequest"><code>InAppTemplateRequest</code></a></td>
    <td></td>
    <td>Creates a new message template for messages using the in-app message channel.</td>
</tr>
<tr>
    <td><a href="#update_in_app_template"><CopyableCode code="update_in_app_template" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-template-name"><code>template-name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-InAppTemplateRequest"><code>InAppTemplateRequest</code></a></td>
    <td><a href="#parameter-create-new-version"><code>create-new-version</code></a>, <a href="#parameter-version"><code>version</code></a></td>
    <td>Updates an existing message template for messages sent through the in-app message channel.</td>
</tr>
<tr>
    <td><a href="#delete_in_app_template"><CopyableCode code="delete_in_app_template" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-template-name"><code>template-name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-version"><code>version</code></a></td>
    <td>Deletes a message template for messages sent using the in-app message channel.</td>
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
    defaultValue="get_in_app_template"
    values={[
        { label: 'get_in_app_template', value: 'get_in_app_template' }
    ]}
>
<TabItem value="get_in_app_template">

Retrieves the content and settings of a message template for messages sent through the in-app channel.

```sql
SELECT
arn,
content,
creation_date,
custom_config,
last_modified_date,
layout,
template_description,
template_name,
template_type,
version,
tags
FROM aws.pinpoint.in_app_templates
WHERE `template-name` = '{{ template-name }}' -- required
AND region = '{{ region }}' -- required
AND version = '{{ version }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_in_app_template"
    values={[
        { label: 'create_in_app_template', value: 'create_in_app_template' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_in_app_template">

Creates a new message template for messages using the in-app message channel.

```sql
INSERT INTO aws.pinpoint.in_app_templates (
InAppTemplateRequest,
`template-name`,
region
)
SELECT 
'{{ InAppTemplateRequest }}' /* required */,
'{{ template-name }}',
'{{ region }}'
RETURNING
template_create_message_body
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: in_app_templates
  props:
    - name: template-name
      value: "{{ template-name }}"
      description: Required parameter for the in_app_templates resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the in_app_templates resource.
    - name: InAppTemplateRequest
      description: |
        InApp Template Request.
      value:
        Content:
          - BackgroundColor: "{{ BackgroundColor }}"
            BodyConfig:
              Alignment: "{{ Alignment }}"
              Body: "{{ Body }}"
              TextColor: "{{ TextColor }}"
            HeaderConfig:
              Alignment: "{{ Alignment }}"
              Header: "{{ Header }}"
              TextColor: "{{ TextColor }}"
            ImageUrl: "{{ ImageUrl }}"
            PrimaryBtn:
              Android:
                ButtonAction: "{{ ButtonAction }}"
                Link: "{{ Link }}"
              DefaultConfig:
                BackgroundColor: "{{ BackgroundColor }}"
                BorderRadius: {{ BorderRadius }}
                ButtonAction: "{{ ButtonAction }}"
                Link: "{{ Link }}"
                Text: "{{ Text }}"
                TextColor: "{{ TextColor }}"
              IOS:
                ButtonAction: "{{ ButtonAction }}"
                Link: "{{ Link }}"
              Web:
                ButtonAction: "{{ ButtonAction }}"
                Link: "{{ Link }}"
            SecondaryBtn:
              Android:
                ButtonAction: "{{ ButtonAction }}"
                Link: "{{ Link }}"
              DefaultConfig:
                BackgroundColor: "{{ BackgroundColor }}"
                BorderRadius: {{ BorderRadius }}
                ButtonAction: "{{ ButtonAction }}"
                Link: "{{ Link }}"
                Text: "{{ Text }}"
                TextColor: "{{ TextColor }}"
              IOS:
                ButtonAction: "{{ ButtonAction }}"
                Link: "{{ Link }}"
              Web:
                ButtonAction: "{{ ButtonAction }}"
                Link: "{{ Link }}"
        CustomConfig: "{{ CustomConfig }}"
        Layout: "{{ Layout }}"
        tags: "{{ tags }}"
        TemplateDescription: "{{ TemplateDescription }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_in_app_template"
    values={[
        { label: 'update_in_app_template', value: 'update_in_app_template' }
    ]}
>
<TabItem value="update_in_app_template">

Updates an existing message template for messages sent through the in-app message channel.

```sql
UPDATE aws.pinpoint.in_app_templates
SET 
InAppTemplateRequest = '{{ InAppTemplateRequest }}'
WHERE 
`template-name` = '{{ template-name }}' --required
AND region = '{{ region }}' --required
AND InAppTemplateRequest = '{{ InAppTemplateRequest }}' --required
AND `create-new-version` = {{ create-new-version}}
AND version = '{{ version}}'
RETURNING
message_body;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_in_app_template"
    values={[
        { label: 'delete_in_app_template', value: 'delete_in_app_template' }
    ]}
>
<TabItem value="delete_in_app_template">

Deletes a message template for messages sent using the in-app message channel.

```sql
DELETE FROM aws.pinpoint.in_app_templates
WHERE `template-name` = '{{ template-name }}' --required
AND region = '{{ region }}' --required
AND version = '{{ version }}'
;
```
</TabItem>
</Tabs>
