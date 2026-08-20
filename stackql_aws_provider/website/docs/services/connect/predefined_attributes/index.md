--- 
title: predefined_attributes
hide_title: false
hide_table_of_contents: false
keywords:
  - predefined_attributes
  - connect
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

Creates, updates, deletes, gets or lists a <code>predefined_attributes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="predefined_attributes" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.connect.predefined_attributes" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_predefined_attribute"
    values={[
        { label: 'describe_predefined_attribute', value: 'describe_predefined_attribute' },
        { label: 'list_predefined_attributes', value: 'list_predefined_attributes' },
        { label: 'search_predefined_attributes', value: 'search_predefined_attributes' }
    ]}
>
<TabItem value="describe_predefined_attribute">

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
    <td><CopyableCode code="attribute_configuration" /></td>
    <td><code>object</code></td>
    <td>Custom metadata that is associated to predefined attributes to control behavior in upstream services, such as controlling how a predefined attribute should be displayed in the Connect Customer admin website.</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_region" /></td>
    <td><code>string</code></td>
    <td>Last modified region. (pattern: &lt;code&gt;&#91;a-z&#93;&#123;2&#125;(-&#91;a-z&#93;+)&#123;1,2&#125;(-&#91;0-9&#93;)?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>Last modified time.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the predefined attribute.</td>
</tr>
<tr>
    <td><CopyableCode code="purposes" /></td>
    <td><code>array</code></td>
    <td>Values that enable you to categorize your predefined attributes. You can use them in custom UI elements across the Connect Customer admin website.</td>
</tr>
<tr>
    <td><CopyableCode code="values" /></td>
    <td><code>object</code></td>
    <td>Information about values of a predefined attribute.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_predefined_attributes">

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
    <td><CopyableCode code="last_modified_region" /></td>
    <td><code>string</code></td>
    <td>Last modified region. (pattern: &lt;code&gt;&#91;a-z&#93;&#123;2&#125;(-&#91;a-z&#93;+)&#123;1,2&#125;(-&#91;0-9&#93;)?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>Last modified time.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the predefined attribute.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="search_predefined_attributes">

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
    <td><CopyableCode code="attribute_configuration" /></td>
    <td><code>object</code></td>
    <td>Custom metadata that is associated to predefined attributes to control behavior in upstream services, such as controlling how a predefined attribute should be displayed in the Connect Customer admin website.</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_region" /></td>
    <td><code>string</code></td>
    <td>Last modified region. (pattern: &lt;code&gt;&#91;a-z&#93;&#123;2&#125;(-&#91;a-z&#93;+)&#123;1,2&#125;(-&#91;0-9&#93;)?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>Last modified time.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the predefined attribute.</td>
</tr>
<tr>
    <td><CopyableCode code="purposes" /></td>
    <td><code>array</code></td>
    <td>Values that enable you to categorize your predefined attributes. You can use them in custom UI elements across the Connect Customer admin website.</td>
</tr>
<tr>
    <td><CopyableCode code="values" /></td>
    <td><code>object</code></td>
    <td>Information about values of a predefined attribute.</td>
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
    <td><a href="#describe_predefined_attribute"><CopyableCode code="describe_predefined_attribute" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes a predefined attribute for the specified Connect Customer instance. A predefined attribute is made up of a name and a value. You can use predefined attributes for: Routing proficiency (for example, agent certification) that has predefined values (for example, a list of possible certifications). For more information, see Create predefined attributes for routing contacts to agents. Contact information that varies between transfers or conferences, such as the name of the business unit handling the contact. For more information, see Use contact segment attributes. For the predefined attributes per instance quota, see Connect Customer quotas. Endpoints: See Connect Customer endpoints and quotas.</td>
</tr>
<tr>
    <td><a href="#list_predefined_attributes"><CopyableCode code="list_predefined_attributes" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Lists predefined attributes for the specified Connect Customer instance. A predefined attribute is made up of a name and a value. You can use predefined attributes for: Routing proficiency (for example, agent certification) that has predefined values (for example, a list of possible certifications). For more information, see Create predefined attributes for routing contacts to agents. Contact information that varies between transfers or conferences, such as the name of the business unit handling the contact. For more information, see Use contact segment attributes. For the predefined attributes per instance quota, see Connect Customer quotas. Endpoints: See Connect Customer endpoints and quotas.</td>
</tr>
<tr>
    <td><a href="#search_predefined_attributes"><CopyableCode code="search_predefined_attributes" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Searches predefined attributes that meet certain criteria. A predefined attribute is made up of a name and a value. You can use predefined attributes for: Routing proficiency (for example, agent certification) that has predefined values (for example, a list of possible certifications). For more information, see Create predefined attributes for routing contacts to agents. Contact information that varies between transfers or conferences, such as the name of the business unit handling the contact. For more information, see Use contact segment attributes. For the predefined attributes per instance quota, see Connect Customer quotas. Endpoints: See Connect Customer endpoints and quotas.</td>
</tr>
<tr>
    <td><a href="#create_predefined_attribute"><CopyableCode code="create_predefined_attribute" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates a new predefined attribute for the specified Connect Customer instance. A predefined attribute is made up of a name and a value. For the predefined attributes per instance quota, see Connect Customer quotas. Use cases Following are common uses cases for this API: Create an attribute for routing proficiency (for example, agent certification) that has predefined values (for example, a list of possible certifications). For more information, see Create predefined attributes for routing contacts to agents. Create an attribute for business unit name that has a list of predefined business unit names used in your organization. This is a use case where information for a contact varies between transfers or conferences. For more information, see Use contact segment attributes. Endpoints: See Connect Customer endpoints and quotas.</td>
</tr>
<tr>
    <td><a href="#update_predefined_attribute"><CopyableCode code="update_predefined_attribute" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates a predefined attribute for the specified Connect Customer instance. A predefined attribute is made up of a name and a value. For the predefined attributes per instance quota, see Connect Customer quotas. Use cases Following are common uses cases for this API: Update routing proficiency (for example, agent certification) that has predefined values (for example, a list of possible certifications). For more information, see Create predefined attributes for routing contacts to agents. Update an attribute for business unit name that has a list of predefined business unit names used in your organization. This is a use case where information for a contact varies between transfers or conferences. For more information, see Use contact segment attributes. Endpoints: See Connect Customer endpoints and quotas.</td>
</tr>
<tr>
    <td><a href="#delete_predefined_attribute"><CopyableCode code="delete_predefined_attribute" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a predefined attribute from the specified Connect Customer instance.</td>
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
<tr id="parameter-instance_id">
    <td><CopyableCode code="instance_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the Connect Customer instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance.</td>
</tr>
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the predefined attribute.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return per page.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_predefined_attribute"
    values={[
        { label: 'describe_predefined_attribute', value: 'describe_predefined_attribute' },
        { label: 'list_predefined_attributes', value: 'list_predefined_attributes' },
        { label: 'search_predefined_attributes', value: 'search_predefined_attributes' }
    ]}
>
<TabItem value="describe_predefined_attribute">

Describes a predefined attribute for the specified Connect Customer instance. A predefined attribute is made up of a name and a value. You can use predefined attributes for: Routing proficiency (for example, agent certification) that has predefined values (for example, a list of possible certifications). For more information, see Create predefined attributes for routing contacts to agents. Contact information that varies between transfers or conferences, such as the name of the business unit handling the contact. For more information, see Use contact segment attributes. For the predefined attributes per instance quota, see Connect Customer quotas. Endpoints: See Connect Customer endpoints and quotas.

```sql
SELECT
attribute_configuration,
last_modified_region,
last_modified_time,
name,
purposes,
values
FROM aws.connect.predefined_attributes
WHERE instance_id = '{{ instance_id }}' -- required
AND name = '{{ name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_predefined_attributes">

Lists predefined attributes for the specified Connect Customer instance. A predefined attribute is made up of a name and a value. You can use predefined attributes for: Routing proficiency (for example, agent certification) that has predefined values (for example, a list of possible certifications). For more information, see Create predefined attributes for routing contacts to agents. Contact information that varies between transfers or conferences, such as the name of the business unit handling the contact. For more information, see Use contact segment attributes. For the predefined attributes per instance quota, see Connect Customer quotas. Endpoints: See Connect Customer endpoints and quotas.

```sql
SELECT
last_modified_region,
last_modified_time,
name
FROM aws.connect.predefined_attributes
WHERE instance_id = '{{ instance_id }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
<TabItem value="search_predefined_attributes">

Searches predefined attributes that meet certain criteria. A predefined attribute is made up of a name and a value. You can use predefined attributes for: Routing proficiency (for example, agent certification) that has predefined values (for example, a list of possible certifications). For more information, see Create predefined attributes for routing contacts to agents. Contact information that varies between transfers or conferences, such as the name of the business unit handling the contact. For more information, see Use contact segment attributes. For the predefined attributes per instance quota, see Connect Customer quotas. Endpoints: See Connect Customer endpoints and quotas.

```sql
SELECT
attribute_configuration,
last_modified_region,
last_modified_time,
name,
purposes,
values
FROM aws.connect.predefined_attributes
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_predefined_attribute"
    values={[
        { label: 'create_predefined_attribute', value: 'create_predefined_attribute' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_predefined_attribute">

Creates a new predefined attribute for the specified Connect Customer instance. A predefined attribute is made up of a name and a value. For the predefined attributes per instance quota, see Connect Customer quotas. Use cases Following are common uses cases for this API: Create an attribute for routing proficiency (for example, agent certification) that has predefined values (for example, a list of possible certifications). For more information, see Create predefined attributes for routing contacts to agents. Create an attribute for business unit name that has a list of predefined business unit names used in your organization. This is a use case where information for a contact varies between transfers or conferences. For more information, see Use contact segment attributes. Endpoints: See Connect Customer endpoints and quotas.

```sql
INSERT INTO aws.connect.predefined_attributes (
Name,
Values,
Purposes,
AttributeConfiguration,
instance_id,
region
)
SELECT 
'{{ Name }}',
'{{ Values }}',
'{{ Purposes }}',
'{{ AttributeConfiguration }}',
'{{ instance_id }}',
'{{ region }}'
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: predefined_attributes
  props:
    - name: instance_id
      value: "{{ instance_id }}"
      description: Required parameter for the predefined_attributes resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the predefined_attributes resource.
    - name: Name
      value: "{{ Name }}"
    - name: Values
      description: |
        Information about values of a predefined attribute.
      value:
        StringList:
          - "{{ StringList }}"
    - name: Purposes
      value:
        - "{{ Purposes }}"
    - name: AttributeConfiguration
      description: |
        Custom metadata that is associated to predefined attributes to control behavior in upstream services, such as controlling how a predefined attribute should be displayed in the Connect Customer admin website.
      value:
        EnableValueValidationOnAssociation: {{ EnableValueValidationOnAssociation }}
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_predefined_attribute"
    values={[
        { label: 'update_predefined_attribute', value: 'update_predefined_attribute' }
    ]}
>
<TabItem value="update_predefined_attribute">

Updates a predefined attribute for the specified Connect Customer instance. A predefined attribute is made up of a name and a value. For the predefined attributes per instance quota, see Connect Customer quotas. Use cases Following are common uses cases for this API: Update routing proficiency (for example, agent certification) that has predefined values (for example, a list of possible certifications). For more information, see Create predefined attributes for routing contacts to agents. Update an attribute for business unit name that has a list of predefined business unit names used in your organization. This is a use case where information for a contact varies between transfers or conferences. For more information, see Use contact segment attributes. Endpoints: See Connect Customer endpoints and quotas.

```sql
UPDATE aws.connect.predefined_attributes
SET 
Values = '{{ Values }}',
Purposes = '{{ Purposes }}',
AttributeConfiguration = '{{ AttributeConfiguration }}'
WHERE 
instance_id = '{{ instance_id }}' --required
AND name = '{{ name }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_predefined_attribute"
    values={[
        { label: 'delete_predefined_attribute', value: 'delete_predefined_attribute' }
    ]}
>
<TabItem value="delete_predefined_attribute">

Deletes a predefined attribute from the specified Connect Customer instance.

```sql
DELETE FROM aws.connect.predefined_attributes
WHERE instance_id = '{{ instance_id }}' --required
AND name = '{{ name }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
