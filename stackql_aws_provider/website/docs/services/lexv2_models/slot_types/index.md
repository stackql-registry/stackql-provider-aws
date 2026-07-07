--- 
title: slot_types
hide_title: false
hide_table_of_contents: false
keywords:
  - slot_types
  - lexv2_models
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

Creates, updates, deletes, gets or lists a <code>slot_types</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="slot_types" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.lexv2_models.slot_types" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_slot_type"
    values={[
        { label: 'describe_slot_type', value: 'describe_slot_type' },
        { label: 'list_slot_types', value: 'list_slot_types' }
    ]}
>
<TabItem value="describe_slot_type">

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
    <td><CopyableCode code="botId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the bot associated with the slot type. (pattern: &lt;code&gt;^&#91;0-9a-zA-Z&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="botVersion" /></td>
    <td><code>string</code></td>
    <td>The version of the bot associated with the slot type. (pattern: &lt;code&gt;^(DRAFT|&#91;0-9&#93;+)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="compositeSlotTypeSetting" /></td>
    <td><code>object</code></td>
    <td>A composite slot is a combination of two or more slots that capture multiple pieces of information in a single user input.</td>
</tr>
<tr>
    <td><CopyableCode code="creationDateTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>A timestamp of the date and time that the slot type was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description specified for the slot type.</td>
</tr>
<tr>
    <td><CopyableCode code="externalSourceSetting" /></td>
    <td><code>object</code></td>
    <td>Provides information about the external source of the slot type's definition.</td>
</tr>
<tr>
    <td><CopyableCode code="lastUpdatedDateTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>A timestamp of the date and time that the slot type was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="localeId" /></td>
    <td><code>string</code></td>
    <td>The language and locale specified for the slot type.</td>
</tr>
<tr>
    <td><CopyableCode code="parentSlotTypeSignature" /></td>
    <td><code>string</code></td>
    <td>The built in slot type used as a parent to this slot type.</td>
</tr>
<tr>
    <td><CopyableCode code="slotTypeId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the slot type. (pattern: &lt;code&gt;^&#91;0-9a-zA-Z&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="slotTypeName" /></td>
    <td><code>string</code></td>
    <td>The name specified for the slot type. (pattern: &lt;code&gt;^(&#91;0-9a-zA-Z&#93;&#91;_-&#93;?)&#123;1,100&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="slotTypeValues" /></td>
    <td><code>array</code></td>
    <td>The values that the slot type can take. Includes any synonyms for the slot type values.</td>
</tr>
<tr>
    <td><CopyableCode code="valueSelectionSetting" /></td>
    <td><code>object</code></td>
    <td>Contains settings used by Amazon Lex to select a slot value.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_slot_types">

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
    <td><CopyableCode code="botId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the bot that contains the slot types. (pattern: &lt;code&gt;^&#91;0-9a-zA-Z&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="botVersion" /></td>
    <td><code>string</code></td>
    <td>The version of the bot that contains the slot types. (pattern: &lt;code&gt;^(DRAFT|&#91;0-9&#93;+)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="localeId" /></td>
    <td><code>string</code></td>
    <td>The language and local of the slot types in the list.</td>
</tr>
<tr>
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>A token that indicates whether there are more results to return in a response to the ListSlotTypes operation. If the nextToken field is present, you send the contents as the nextToken parameter of a ListSlotTypes operation request to get the next page of results.</td>
</tr>
<tr>
    <td><CopyableCode code="slotTypeSummaries" /></td>
    <td><code>array</code></td>
    <td>Summary information for the slot types that meet the filter criteria specified in the request. The length of the list is specified in the maxResults parameter of the request. If there are more slot types available, the nextToken field contains a token to get the next page of results.</td>
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
    <td><a href="#describe_slot_type"><CopyableCode code="describe_slot_type" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-slot_type_id"><code>slot_type_id</code></a>, <a href="#parameter-bot_id"><code>bot_id</code></a>, <a href="#parameter-bot_version"><code>bot_version</code></a>, <a href="#parameter-locale_id"><code>locale_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets metadata information about a slot type.</td>
</tr>
<tr>
    <td><a href="#list_slot_types"><CopyableCode code="list_slot_types" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-bot_id"><code>bot_id</code></a>, <a href="#parameter-bot_version"><code>bot_version</code></a>, <a href="#parameter-locale_id"><code>locale_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets a list of slot types that match the specified criteria.</td>
</tr>
<tr>
    <td><a href="#create_slot_type"><CopyableCode code="create_slot_type" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-bot_id"><code>bot_id</code></a>, <a href="#parameter-bot_version"><code>bot_version</code></a>, <a href="#parameter-locale_id"><code>locale_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-slotTypeName"><code>slotTypeName</code></a></td>
    <td></td>
    <td>Creates a custom slot type To create a custom slot type, specify a name for the slot type and a set of enumeration values, the values that a slot of this type can assume.</td>
</tr>
<tr>
    <td><a href="#update_slot_type"><CopyableCode code="update_slot_type" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-slot_type_id"><code>slot_type_id</code></a>, <a href="#parameter-bot_id"><code>bot_id</code></a>, <a href="#parameter-bot_version"><code>bot_version</code></a>, <a href="#parameter-locale_id"><code>locale_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-slotTypeName"><code>slotTypeName</code></a></td>
    <td></td>
    <td>Updates the configuration of an existing slot type.</td>
</tr>
<tr>
    <td><a href="#delete_slot_type"><CopyableCode code="delete_slot_type" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-slot_type_id"><code>slot_type_id</code></a>, <a href="#parameter-bot_id"><code>bot_id</code></a>, <a href="#parameter-bot_version"><code>bot_version</code></a>, <a href="#parameter-locale_id"><code>locale_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-skipResourceInUseCheck"><code>skipResourceInUseCheck</code></a></td>
    <td>Deletes a slot type from a bot locale. If a slot is using the slot type, Amazon Lex throws a ResourceInUseException exception. To avoid the exception, set the skipResourceInUseCheck parameter to true.</td>
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
<tr id="parameter-bot_id">
    <td><CopyableCode code="bot_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the bot associated with the slot type.</td>
</tr>
<tr id="parameter-bot_version">
    <td><CopyableCode code="bot_version" /></td>
    <td><code>string</code></td>
    <td>The version of the bot associated with the slot type.</td>
</tr>
<tr id="parameter-locale_id">
    <td><CopyableCode code="locale_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the language and locale that the slot type will be deleted from. The string must match one of the supported locales. For more information, see Supported languages.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-slot_type_id">
    <td><CopyableCode code="slot_type_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the slot type to delete.</td>
</tr>
<tr id="parameter-skipResourceInUseCheck">
    <td><CopyableCode code="skipResourceInUseCheck" /></td>
    <td><code>boolean</code></td>
    <td>By default, the DeleteSlotType operations throws a ResourceInUseException exception if you try to delete a slot type used by a slot. Set the skipResourceInUseCheck parameter to true to skip this check and remove the slot type even if a slot uses it.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_slot_type"
    values={[
        { label: 'describe_slot_type', value: 'describe_slot_type' },
        { label: 'list_slot_types', value: 'list_slot_types' }
    ]}
>
<TabItem value="describe_slot_type">

Gets metadata information about a slot type.

```sql
SELECT
botId,
botVersion,
compositeSlotTypeSetting,
creationDateTime,
description,
externalSourceSetting,
lastUpdatedDateTime,
localeId,
parentSlotTypeSignature,
slotTypeId,
slotTypeName,
slotTypeValues,
valueSelectionSetting
FROM aws.lexv2_models.slot_types
WHERE slot_type_id = '{{ slot_type_id }}' -- required
AND bot_id = '{{ bot_id }}' -- required
AND bot_version = '{{ bot_version }}' -- required
AND locale_id = '{{ locale_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_slot_types">

Gets a list of slot types that match the specified criteria.

```sql
SELECT
botId,
botVersion,
localeId,
nextToken,
slotTypeSummaries
FROM aws.lexv2_models.slot_types
WHERE bot_id = '{{ bot_id }}' -- required
AND bot_version = '{{ bot_version }}' -- required
AND locale_id = '{{ locale_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_slot_type"
    values={[
        { label: 'create_slot_type', value: 'create_slot_type' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_slot_type">

Creates a custom slot type To create a custom slot type, specify a name for the slot type and a set of enumeration values, the values that a slot of this type can assume.

```sql
INSERT INTO aws.lexv2_models.slot_types (
slotTypeName,
description,
slotTypeValues,
valueSelectionSetting,
parentSlotTypeSignature,
externalSourceSetting,
compositeSlotTypeSetting,
bot_id,
bot_version,
locale_id,
region
)
SELECT 
'{{ slotTypeName }}' /* required */,
'{{ description }}',
'{{ slotTypeValues }}',
'{{ valueSelectionSetting }}',
'{{ parentSlotTypeSignature }}',
'{{ externalSourceSetting }}',
'{{ compositeSlotTypeSetting }}',
'{{ bot_id }}',
'{{ bot_version }}',
'{{ locale_id }}',
'{{ region }}'
RETURNING
botId,
botVersion,
compositeSlotTypeSetting,
creationDateTime,
description,
externalSourceSetting,
localeId,
parentSlotTypeSignature,
slotTypeId,
slotTypeName,
slotTypeValues,
valueSelectionSetting
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: slot_types
  props:
    - name: bot_id
      value: "{{ bot_id }}"
      description: Required parameter for the slot_types resource.
    - name: bot_version
      value: "{{ bot_version }}"
      description: Required parameter for the slot_types resource.
    - name: locale_id
      value: "{{ locale_id }}"
      description: Required parameter for the slot_types resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the slot_types resource.
    - name: slotTypeName
      value: "{{ slotTypeName }}"
    - name: description
      value: "{{ description }}"
    - name: slotTypeValues
      value:
        - sampleValue:
            value: "{{ value }}"
          synonyms: "{{ synonyms }}"
    - name: valueSelectionSetting
      description: |
        Contains settings used by Amazon Lex to select a slot value.
      value:
        resolutionStrategy: "{{ resolutionStrategy }}"
        regexFilter:
          pattern_: "{{ pattern_ }}"
        advancedRecognitionSetting:
          audioRecognitionStrategy: "{{ audioRecognitionStrategy }}"
    - name: parentSlotTypeSignature
      value: "{{ parentSlotTypeSignature }}"
    - name: externalSourceSetting
      description: |
        Provides information about the external source of the slot type's definition.
      value:
        grammarSlotTypeSetting:
          source:
            s3BucketName: "{{ s3BucketName }}"
            s3ObjectKey: "{{ s3ObjectKey }}"
            kmsKeyArn: "{{ kmsKeyArn }}"
    - name: compositeSlotTypeSetting
      description: |
        A composite slot is a combination of two or more slots that capture multiple pieces of information in a single user input.
      value:
        subSlots:
          - name: "{{ name }}"
            slotTypeId: "{{ slotTypeId }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_slot_type"
    values={[
        { label: 'update_slot_type', value: 'update_slot_type' }
    ]}
>
<TabItem value="update_slot_type">

Updates the configuration of an existing slot type.

```sql
UPDATE aws.lexv2_models.slot_types
SET 
slotTypeName = '{{ slotTypeName }}',
description = '{{ description }}',
slotTypeValues = '{{ slotTypeValues }}',
valueSelectionSetting = '{{ valueSelectionSetting }}',
parentSlotTypeSignature = '{{ parentSlotTypeSignature }}',
externalSourceSetting = '{{ externalSourceSetting }}',
compositeSlotTypeSetting = '{{ compositeSlotTypeSetting }}'
WHERE 
slot_type_id = '{{ slot_type_id }}' --required
AND bot_id = '{{ bot_id }}' --required
AND bot_version = '{{ bot_version }}' --required
AND locale_id = '{{ locale_id }}' --required
AND region = '{{ region }}' --required
AND slotTypeName = '{{ slotTypeName }}' --required
RETURNING
botId,
botVersion,
compositeSlotTypeSetting,
creationDateTime,
description,
externalSourceSetting,
lastUpdatedDateTime,
localeId,
parentSlotTypeSignature,
slotTypeId,
slotTypeName,
slotTypeValues,
valueSelectionSetting;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_slot_type"
    values={[
        { label: 'delete_slot_type', value: 'delete_slot_type' }
    ]}
>
<TabItem value="delete_slot_type">

Deletes a slot type from a bot locale. If a slot is using the slot type, Amazon Lex throws a ResourceInUseException exception. To avoid the exception, set the skipResourceInUseCheck parameter to true.

```sql
DELETE FROM aws.lexv2_models.slot_types
WHERE slot_type_id = '{{ slot_type_id }}' --required
AND bot_id = '{{ bot_id }}' --required
AND bot_version = '{{ bot_version }}' --required
AND locale_id = '{{ locale_id }}' --required
AND region = '{{ region }}' --required
AND skipResourceInUseCheck = '{{ skipResourceInUseCheck }}'
;
```
</TabItem>
</Tabs>
