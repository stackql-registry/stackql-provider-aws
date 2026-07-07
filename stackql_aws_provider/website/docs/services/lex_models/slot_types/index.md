--- 
title: slot_types
hide_title: false
hide_table_of_contents: false
keywords:
  - slot_types
  - lex_models
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.lex_models.slot_types" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_slot_type"
    values={[
        { label: 'get_slot_type', value: 'get_slot_type' },
        { label: 'get_slot_types', value: 'get_slot_types' }
    ]}
>
<TabItem value="get_slot_type">

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
    <td>The name of the slot type. (pattern: &lt;code&gt;^(&#91;A-Za-z&#93;_?)+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="checksum" /></td>
    <td><code>string</code></td>
    <td>Checksum of the $LATEST version of the slot type.</td>
</tr>
<tr>
    <td><CopyableCode code="createdDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date that the slot type was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description of the slot type.</td>
</tr>
<tr>
    <td><CopyableCode code="enumerationValues" /></td>
    <td><code>array</code></td>
    <td>A list of EnumerationValue objects that defines the values that the slot type can take.</td>
</tr>
<tr>
    <td><CopyableCode code="lastUpdatedDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date that the slot type was updated. When you create a resource, the creation date and last update date are the same.</td>
</tr>
<tr>
    <td><CopyableCode code="parentSlotTypeSignature" /></td>
    <td><code>string</code></td>
    <td>The built-in slot type used as a parent for the slot type. (pattern: &lt;code&gt;^((AMAZON\.)_?|&#91;A-Za-z&#93;_?)+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="slotTypeConfigurations" /></td>
    <td><code>array</code></td>
    <td>Configuration information that extends the parent built-in slot type.</td>
</tr>
<tr>
    <td><CopyableCode code="valueSelectionStrategy" /></td>
    <td><code>string</code></td>
    <td>The strategy that Amazon Lex uses to determine the value of the slot. For more information, see PutSlotType. (ORIGINAL_VALUE, TOP_RESOLUTION)</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>string</code></td>
    <td>The version of the slot type. (pattern: &lt;code&gt;\$LATEST|&#91;0-9&#93;+&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_slot_types">

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
    <td>The name of the slot type. (pattern: &lt;code&gt;^(&#91;A-Za-z&#93;_?)+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="createdDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date that the slot type was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description of the slot type.</td>
</tr>
<tr>
    <td><CopyableCode code="lastUpdatedDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date that the slot type was updated. When you create a resource, the creation date and last updated date are the same.</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>string</code></td>
    <td>The version of the slot type. (pattern: &lt;code&gt;\$LATEST|&#91;0-9&#93;+&lt;/code&gt;)</td>
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
    <td><a href="#get_slot_type"><CopyableCode code="get_slot_type" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-version"><code>version</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about a specific version of a slot type. In addition to specifying the slot type name, you must specify the slot type version. This operation requires permissions for the lex:GetSlotType action.</td>
</tr>
<tr>
    <td><a href="#get_slot_types"><CopyableCode code="get_slot_types" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nameContains"><code>nameContains</code></a></td>
    <td>Returns slot type information as follows: If you specify the nameContains field, returns the $LATEST version of all slot types that contain the specified string. If you don't specify the nameContains field, returns information about the $LATEST version of all slot types. The operation requires permission for the lex:GetSlotTypes action.</td>
</tr>
<tr>
    <td><a href="#put_slot_type"><CopyableCode code="put_slot_type" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates a custom slot type or replaces an existing custom slot type. To create a custom slot type, specify a name for the slot type and a set of enumeration values, which are the values that a slot of this type can assume. For more information, see how-it-works. If you specify the name of an existing slot type, the fields in the request replace the existing values in the $LATEST version of the slot type. Amazon Lex removes the fields that you don't provide in the request. If you don't specify required fields, Amazon Lex throws an exception. When you update the $LATEST version of a slot type, if a bot uses the $LATEST version of an intent that contains the slot type, the bot's status field is set to NOT_BUILT. This operation requires permissions for the lex:PutSlotType action.</td>
</tr>
<tr>
    <td><a href="#delete_slot_type"><CopyableCode code="delete_slot_type" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes all versions of the slot type, including the $LATEST version. To delete a specific version of the slot type, use the DeleteSlotTypeVersion operation. You can delete a version of a slot type only if it is not referenced. To delete a slot type that is referred to in one or more intents, you must remove those references first. If you get the ResourceInUseException exception, the exception provides an example reference that shows the intent where the slot type is referenced. To remove the reference to the slot type, either update the intent or delete it. If you get the same exception when you attempt to delete the slot type again, repeat until the slot type has no references and the DeleteSlotType call is successful. This operation requires permission for the lex:DeleteSlotType action.</td>
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
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the slot type. The name is case sensitive.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-version">
    <td><CopyableCode code="version" /></td>
    <td><code>string</code></td>
    <td>The version of the slot type.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of slot types to return in the response. The default is 10.</td>
</tr>
<tr id="parameter-nameContains">
    <td><CopyableCode code="nameContains" /></td>
    <td><code>string</code></td>
    <td>Substring to match in slot type names. A slot type will be returned if any part of its name matches the substring. For example, "xyz" matches both "xyzabc" and "abcxyz."</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>A pagination token that fetches the next page of slot types. If the response to this API call is truncated, Amazon Lex returns a pagination token in the response. To fetch next page of slot types, specify the pagination token in the next request.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_slot_type"
    values={[
        { label: 'get_slot_type', value: 'get_slot_type' },
        { label: 'get_slot_types', value: 'get_slot_types' }
    ]}
>
<TabItem value="get_slot_type">

Returns information about a specific version of a slot type. In addition to specifying the slot type name, you must specify the slot type version. This operation requires permissions for the lex:GetSlotType action.

```sql
SELECT
name,
checksum,
createdDate,
description,
enumerationValues,
lastUpdatedDate,
parentSlotTypeSignature,
slotTypeConfigurations,
valueSelectionStrategy,
version
FROM aws.lex_models.slot_types
WHERE name = '{{ name }}' -- required
AND version = '{{ version }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="get_slot_types">

Returns slot type information as follows: If you specify the nameContains field, returns the $LATEST version of all slot types that contain the specified string. If you don't specify the nameContains field, returns information about the $LATEST version of all slot types. The operation requires permission for the lex:GetSlotTypes action.

```sql
SELECT
name,
createdDate,
description,
lastUpdatedDate,
version
FROM aws.lex_models.slot_types
WHERE region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
AND nameContains = '{{ nameContains }}'
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_slot_type"
    values={[
        { label: 'put_slot_type', value: 'put_slot_type' }
    ]}
>
<TabItem value="put_slot_type">

Creates a custom slot type or replaces an existing custom slot type. To create a custom slot type, specify a name for the slot type and a set of enumeration values, which are the values that a slot of this type can assume. For more information, see how-it-works. If you specify the name of an existing slot type, the fields in the request replace the existing values in the $LATEST version of the slot type. Amazon Lex removes the fields that you don't provide in the request. If you don't specify required fields, Amazon Lex throws an exception. When you update the $LATEST version of a slot type, if a bot uses the $LATEST version of an intent that contains the slot type, the bot's status field is set to NOT_BUILT. This operation requires permissions for the lex:PutSlotType action.

```sql
REPLACE aws.lex_models.slot_types
SET 
description = '{{ description }}',
enumerationValues = '{{ enumerationValues }}',
checksum = '{{ checksum }}',
valueSelectionStrategy = '{{ valueSelectionStrategy }}',
createVersion = {{ createVersion }},
parentSlotTypeSignature = '{{ parentSlotTypeSignature }}',
slotTypeConfigurations = '{{ slotTypeConfigurations }}'
WHERE 
name = '{{ name }}' --required
AND region = '{{ region }}' --required
RETURNING
name,
checksum,
createVersion,
createdDate,
description,
enumerationValues,
lastUpdatedDate,
parentSlotTypeSignature,
slotTypeConfigurations,
valueSelectionStrategy,
version;
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

Deletes all versions of the slot type, including the $LATEST version. To delete a specific version of the slot type, use the DeleteSlotTypeVersion operation. You can delete a version of a slot type only if it is not referenced. To delete a slot type that is referred to in one or more intents, you must remove those references first. If you get the ResourceInUseException exception, the exception provides an example reference that shows the intent where the slot type is referenced. To remove the reference to the slot type, either update the intent or delete it. If you get the same exception when you attempt to delete the slot type again, repeat until the slot type has no references and the DeleteSlotType call is successful. This operation requires permission for the lex:DeleteSlotType action.

```sql
DELETE FROM aws.lex_models.slot_types
WHERE name = '{{ name }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
