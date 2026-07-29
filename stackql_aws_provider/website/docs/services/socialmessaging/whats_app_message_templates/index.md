--- 
title: whats_app_message_templates
hide_title: false
hide_table_of_contents: false
keywords:
  - whats_app_message_templates
  - socialmessaging
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

Creates, updates, deletes, gets or lists a <code>whats_app_message_templates</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="whats_app_message_templates" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.socialmessaging.whats_app_message_templates" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_whats_app_message_template"
    values={[
        { label: 'get_whats_app_message_template', value: 'get_whats_app_message_template' }
    ]}
>
<TabItem value="get_whats_app_message_template">

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
    <td><CopyableCode code="template" /></td>
    <td><code>string</code></td>
    <td>The complete template definition as a JSON string (maximum 6000 characters).</td>
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
    <td><a href="#get_whats_app_message_template"><CopyableCode code="get_whats_app_message_template" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-metaTemplateId"><code>metaTemplateId</code></a>, <a href="#parameter-templateName"><code>templateName</code></a>, <a href="#parameter-templateLanguageCode"><code>templateLanguageCode</code></a></td>
    <td>Retrieves a specific WhatsApp message template.</td>
</tr>
<tr>
    <td><a href="#create_whats_app_message_template"><CopyableCode code="create_whats_app_message_template" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-templateDefinition"><code>templateDefinition</code></a>, <a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Creates a new WhatsApp message template from a custom definition. Amazon Web Services End User Messaging Social does not store any WhatsApp message template content.</td>
</tr>
<tr>
    <td><a href="#create_whats_app_message_template_from_library"><CopyableCode code="create_whats_app_message_template_from_library" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-metaLibraryTemplate"><code>metaLibraryTemplate</code></a>, <a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Creates a new WhatsApp message template using a template from Meta's template library.</td>
</tr>
<tr>
    <td><a href="#create_whats_app_message_template_media"><CopyableCode code="create_whats_app_message_template_media" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Uploads media for use in a WhatsApp message template.</td>
</tr>
<tr>
    <td><a href="#update_whats_app_message_template"><CopyableCode code="update_whats_app_message_template" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Updates an existing WhatsApp message template.</td>
</tr>
<tr>
    <td><a href="#delete_whats_app_message_template"><CopyableCode code="delete_whats_app_message_template" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-templateName"><code>templateName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-metaTemplateId"><code>metaTemplateId</code></a>, <a href="#parameter-deleteAllTemplates"><code>deleteAllTemplates</code></a></td>
    <td>Deletes a WhatsApp message template.</td>
</tr>
<tr>
    <td><a href="#list_whats_app_message_templates"><CopyableCode code="list_whats_app_message_templates" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Lists WhatsApp message templates for a specific WhatsApp Business Account.</td>
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
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ID of the WhatsApp Business Account to list templates for.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-templateName">
    <td><CopyableCode code="templateName" /></td>
    <td><code>string</code></td>
    <td>The name of the template to delete.</td>
</tr>
<tr id="parameter-deleteAllTemplates">
    <td><CopyableCode code="deleteAllTemplates" /></td>
    <td><code>boolean</code></td>
    <td>If true, deletes all language versions of the template.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return per page (1-100).</td>
</tr>
<tr id="parameter-metaTemplateId">
    <td><CopyableCode code="metaTemplateId" /></td>
    <td><code>string</code></td>
    <td>The numeric ID of the template assigned by Meta.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next page of results.</td>
</tr>
<tr id="parameter-templateLanguageCode">
    <td><CopyableCode code="templateLanguageCode" /></td>
    <td><code>string</code></td>
    <td>The language code of the message template (for example, en or en_US). Use together with templateName as an alternative to metaTemplateId to identify a template.</td>
</tr>
<tr id="parameter-templateName">
    <td><CopyableCode code="templateName" /></td>
    <td><code>string</code></td>
    <td>The name of the message template. Use together with templateLanguageCode as an alternative to metaTemplateId to identify a template.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_whats_app_message_template"
    values={[
        { label: 'get_whats_app_message_template', value: 'get_whats_app_message_template' }
    ]}
>
<TabItem value="get_whats_app_message_template">

Retrieves a specific WhatsApp message template.

```sql
SELECT
template
FROM aws.socialmessaging.whats_app_message_templates
WHERE id = '{{ id }}' -- required
AND region = '{{ region }}' -- required
AND metaTemplateId = '{{ metaTemplateId }}'
AND templateName = '{{ templateName }}'
AND templateLanguageCode = '{{ templateLanguageCode }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_whats_app_message_template"
    values={[
        { label: 'create_whats_app_message_template', value: 'create_whats_app_message_template' },
        { label: 'create_whats_app_message_template_from_library', value: 'create_whats_app_message_template_from_library' },
        { label: 'create_whats_app_message_template_media', value: 'create_whats_app_message_template_media' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_whats_app_message_template">

Creates a new WhatsApp message template from a custom definition. Amazon Web Services End User Messaging Social does not store any WhatsApp message template content.

```sql
INSERT INTO aws.socialmessaging.whats_app_message_templates (
templateDefinition,
id,
region
)
SELECT 
'{{ templateDefinition }}' /* required */,
'{{ id }}' /* required */,
'{{ region }}'
RETURNING
category,
meta_template_id,
template_status
;
```
</TabItem>
<TabItem value="create_whats_app_message_template_from_library">

Creates a new WhatsApp message template using a template from Meta's template library.

```sql
INSERT INTO aws.socialmessaging.whats_app_message_templates (
metaLibraryTemplate,
id,
region
)
SELECT 
'{{ metaLibraryTemplate }}' /* required */,
'{{ id }}' /* required */,
'{{ region }}'
RETURNING
category,
meta_template_id,
template_status
;
```
</TabItem>
<TabItem value="create_whats_app_message_template_media">

Uploads media for use in a WhatsApp message template.

```sql
INSERT INTO aws.socialmessaging.whats_app_message_templates (
id,
sourceS3File,
region
)
SELECT 
'{{ id }}' /* required */,
'{{ sourceS3File }}',
'{{ region }}'
RETURNING
meta_header_handle
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: whats_app_message_templates
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the whats_app_message_templates resource.
    - name: templateDefinition
      value: "{{ templateDefinition }}"
    - name: id
      value: "{{ id }}"
    - name: metaLibraryTemplate
      description: |
        Represents a template from Meta's library with customization options.
      value:
        templateName: "{{ templateName }}"
        libraryTemplateName: "{{ libraryTemplateName }}"
        templateCategory: "{{ templateCategory }}"
        templateLanguage: "{{ templateLanguage }}"
        libraryTemplateButtonInputs:
          - type_: "{{ type_ }}"
            phoneNumber: "{{ phoneNumber }}"
            url: "{{ url }}"
            otpType: "{{ otpType }}"
            zeroTapTermsAccepted: {{ zeroTapTermsAccepted }}
            supportedApps: "{{ supportedApps }}"
        libraryTemplateBodyInputs:
          addContactNumber: {{ addContactNumber }}
          addLearnMoreLink: {{ addLearnMoreLink }}
          addSecurityRecommendation: {{ addSecurityRecommendation }}
          addTrackPackageLink: {{ addTrackPackageLink }}
          codeExpirationMinutes: {{ codeExpirationMinutes }}
    - name: sourceS3File
      description: |
        Contains information for the S3 bucket that contains media files.
      value:
        bucketName: "{{ bucketName }}"
        key: "{{ key }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_whats_app_message_template"
    values={[
        { label: 'update_whats_app_message_template', value: 'update_whats_app_message_template' }
    ]}
>
<TabItem value="update_whats_app_message_template">

Updates an existing WhatsApp message template.

```sql
UPDATE aws.socialmessaging.whats_app_message_templates
SET 
id = '{{ id }}',
metaTemplateId = '{{ metaTemplateId }}',
templateName = '{{ templateName }}',
templateLanguageCode = '{{ templateLanguageCode }}',
parameterFormat = '{{ parameterFormat }}',
templateCategory = '{{ templateCategory }}',
templateComponents = '{{ templateComponents }}',
ctaUrlLinkTrackingOptedOut = {{ ctaUrlLinkTrackingOptedOut }}
WHERE 
region = '{{ region }}' --required
AND id = '{{ id }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_whats_app_message_template"
    values={[
        { label: 'delete_whats_app_message_template', value: 'delete_whats_app_message_template' }
    ]}
>
<TabItem value="delete_whats_app_message_template">

Deletes a WhatsApp message template.

```sql
DELETE FROM aws.socialmessaging.whats_app_message_templates
WHERE id = '{{ id }}' --required
AND templateName = '{{ templateName }}' --required
AND region = '{{ region }}' --required
AND metaTemplateId = '{{ metaTemplateId }}'
AND deleteAllTemplates = '{{ deleteAllTemplates }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="list_whats_app_message_templates"
    values={[
        { label: 'list_whats_app_message_templates', value: 'list_whats_app_message_templates' }
    ]}
>
<TabItem value="list_whats_app_message_templates">

Lists WhatsApp message templates for a specific WhatsApp Business Account.

```sql
EXEC aws.socialmessaging.whats_app_message_templates.list_whats_app_message_templates 
@id='{{ id }}' --required, 
@region='{{ region }}' --required, 
@nextToken='{{ nextToken }}', 
@maxResults='{{ maxResults }}'
;
```
</TabItem>
</Tabs>
