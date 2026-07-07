--- 
title: profile_object_type_templates
hide_title: false
hide_table_of_contents: false
keywords:
  - profile_object_type_templates
  - customer_profiles
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

Creates, updates, deletes, gets or lists a <code>profile_object_type_templates</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="profile_object_type_templates" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.customer_profiles.profile_object_type_templates" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_profile_object_type_template"
    values={[
        { label: 'get_profile_object_type_template', value: 'get_profile_object_type_template' },
        { label: 'list_profile_object_type_templates', value: 'list_profile_object_type_templates' }
    ]}
>
<TabItem value="get_profile_object_type_template">

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
    <td><CopyableCode code="AllowProfileCreation" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether a profile should be created when data is received if one doesn’t exist for an object of this type. The default is FALSE. If the AllowProfileCreation flag is set to FALSE, then the service tries to fetch a standard profile and associate this object with the profile. If it is set to TRUE, and if no match is found, then the service creates a new standard profile.</td>
</tr>
<tr>
    <td><CopyableCode code="Fields" /></td>
    <td><code>object</code></td>
    <td>A map of the name and ObjectType field.</td>
</tr>
<tr>
    <td><CopyableCode code="Keys" /></td>
    <td><code>object</code></td>
    <td>A list of unique keys that can be used to map data to the profile.</td>
</tr>
<tr>
    <td><CopyableCode code="SourceLastUpdatedTimestampFormat" /></td>
    <td><code>string</code></td>
    <td>The format of your sourceLastUpdatedTimestamp that was previously set up.</td>
</tr>
<tr>
    <td><CopyableCode code="SourceName" /></td>
    <td><code>string</code></td>
    <td>The name of the source of the object template. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9_-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="SourceObject" /></td>
    <td><code>string</code></td>
    <td>The source of the object template. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9_-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="TemplateId" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for the object template. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9_-&#93;+$&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_profile_object_type_templates">

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
    <td><CopyableCode code="Items" /></td>
    <td><code>array</code></td>
    <td>The list of ListProfileObjectType template instances.</td>
</tr>
<tr>
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The pagination token from the previous ListObjectTypeTemplates API call.</td>
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
    <td><a href="#get_profile_object_type_template"><CopyableCode code="get_profile_object_type_template" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-template_id"><code>template_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the template information for a specific object type. A template is a predefined ProfileObjectType, such as “Salesforce-Account” or “Salesforce-Contact.” When a user sends a ProfileObject, using the PutProfileObject API, with an ObjectTypeName that matches one of the TemplateIds, it uses the mappings from the template.</td>
</tr>
<tr>
    <td><a href="#list_profile_object_type_templates"><CopyableCode code="list_profile_object_type_templates" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-next-token"><code>next-token</code></a>, <a href="#parameter-max-results"><code>max-results</code></a></td>
    <td>Lists all of the template information for object types.</td>
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
<tr id="parameter-template_id">
    <td><CopyableCode code="template_id" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for the object template.</td>
</tr>
<tr id="parameter-max-results">
    <td><CopyableCode code="max-results" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of objects returned per page.</td>
</tr>
<tr id="parameter-next-token">
    <td><CopyableCode code="next-token" /></td>
    <td><code>string</code></td>
    <td>The pagination token from the previous ListObjectTypeTemplates API call.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_profile_object_type_template"
    values={[
        { label: 'get_profile_object_type_template', value: 'get_profile_object_type_template' },
        { label: 'list_profile_object_type_templates', value: 'list_profile_object_type_templates' }
    ]}
>
<TabItem value="get_profile_object_type_template">

Returns the template information for a specific object type. A template is a predefined ProfileObjectType, such as “Salesforce-Account” or “Salesforce-Contact.” When a user sends a ProfileObject, using the PutProfileObject API, with an ObjectTypeName that matches one of the TemplateIds, it uses the mappings from the template.

```sql
SELECT
AllowProfileCreation,
Fields,
Keys,
SourceLastUpdatedTimestampFormat,
SourceName,
SourceObject,
TemplateId
FROM aws.customer_profiles.profile_object_type_templates
WHERE template_id = '{{ template_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_profile_object_type_templates">

Lists all of the template information for object types.

```sql
SELECT
Items,
NextToken
FROM aws.customer_profiles.profile_object_type_templates
WHERE region = '{{ region }}' -- required
AND `next-token` = '{{ next-token }}'
AND `max-results` = '{{ max-results }}'
;
```
</TabItem>
</Tabs>
