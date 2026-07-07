--- 
title: views
hide_title: false
hide_table_of_contents: false
keywords:
  - views
  - resource_explorer_2
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

Creates, updates, deletes, gets or lists a <code>views</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="views" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.resource_explorer_2.views" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_view"
    values={[
        { label: 'get_view', value: 'get_view' },
        { label: 'list_views', value: 'list_views' }
    ]}
>
<TabItem value="get_view">

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
    <td><CopyableCode code="Tags" /></td>
    <td><code>object</code></td>
    <td>Tag key and value pairs that are attached to the view.</td>
</tr>
<tr>
    <td><CopyableCode code="View" /></td>
    <td><code>object</code></td>
    <td>A view is a structure that defines a set of filters that provide a view into the information in the Amazon Web Services Resource Explorer index. The filters specify which information from the index is visible to the users of the view. For example, you can specify filters that include only resources that are tagged with the key "ENV" and the value "DEVELOPMENT" in the results returned by this view. You could also create a second view that includes only resources that are tagged with "ENV" and "PRODUCTION".</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_views">

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
    <td><CopyableCode code="view" /></td>
    <td><code>string</code></td>
    <td>The list of views available in the Amazon Web Services Region in which you called this operation.</td>
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
    <td><a href="#get_view"><CopyableCode code="get_view" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves details of the specified view.</td>
</tr>
<tr>
    <td><a href="#list_views"><CopyableCode code="list_views" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the Amazon resource names (ARNs) of the views available in the Amazon Web Services Region in which you call this operation. Always check the NextToken response parameter for a null value when calling a paginated operation. These operations can occasionally return an empty set of results even when there are more results available. The NextToken response parameter value is null only when there are no more results to display.</td>
</tr>
<tr>
    <td><a href="#create_view"><CopyableCode code="create_view" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ViewName"><code>ViewName</code></a></td>
    <td></td>
    <td>Creates a view that users can query by using the Search operation. Results from queries that you make using this view include only resources that match the view's Filters. For more information about Amazon Web Services Resource Explorer views, see Managing views in the Amazon Web Services Resource Explorer User Guide. Only the principals with an IAM identity-based policy that grants Allow to the Search action on a Resource with the Amazon resource name (ARN) of this view can Search using views you create with this operation.</td>
</tr>
<tr>
    <td><a href="#update_view"><CopyableCode code="update_view" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ViewArn"><code>ViewArn</code></a></td>
    <td></td>
    <td>Modifies some of the details of a view. You can change the filter string and the list of included properties. You can't change the name of the view.</td>
</tr>
<tr>
    <td><a href="#delete_view"><CopyableCode code="delete_view" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified view. If the specified view is the default view for its Amazon Web Services Region, then all Search operations in that Region must explicitly specify the view to use until you configure a new default by calling the AssociateDefaultView operation.</td>
</tr>
<tr>
    <td><a href="#batch_get_view"><CopyableCode code="batch_get_view" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves details about a list of views.</td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_view"
    values={[
        { label: 'get_view', value: 'get_view' },
        { label: 'list_views', value: 'list_views' }
    ]}
>
<TabItem value="get_view">

Retrieves details of the specified view.

```sql
SELECT
Tags,
View
FROM aws.resource_explorer_2.views
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_views">

Lists the Amazon resource names (ARNs) of the views available in the Amazon Web Services Region in which you call this operation. Always check the NextToken response parameter for a null value when calling a paginated operation. These operations can occasionally return an empty set of results even when there are more results available. The NextToken response parameter value is null only when there are no more results to display.

```sql
SELECT
view
FROM aws.resource_explorer_2.views
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_view"
    values={[
        { label: 'create_view', value: 'create_view' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_view">

Creates a view that users can query by using the Search operation. Results from queries that you make using this view include only resources that match the view's Filters. For more information about Amazon Web Services Resource Explorer views, see Managing views in the Amazon Web Services Resource Explorer User Guide. Only the principals with an IAM identity-based policy that grants Allow to the Search action on a Resource with the Amazon resource name (ARN) of this view can Search using views you create with this operation.

```sql
INSERT INTO aws.resource_explorer_2.views (
ClientToken,
ViewName,
IncludedProperties,
Scope,
Filters,
Tags,
region
)
SELECT 
'{{ ClientToken }}',
'{{ ViewName }}' /* required */,
'{{ IncludedProperties }}',
'{{ Scope }}',
'{{ Filters }}',
'{{ Tags }}',
'{{ region }}'
RETURNING
View
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: views
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the views resource.
    - name: ClientToken
      value: "{{ ClientToken }}"
    - name: ViewName
      value: "{{ ViewName }}"
    - name: IncludedProperties
      value:
        - Name: "{{ Name }}"
    - name: Scope
      value: "{{ Scope }}"
    - name: Filters
      description: |
        A search filter defines which resources can be part of a search query result set.
      value:
        FilterString: "{{ FilterString }}"
    - name: Tags
      value: "{{ Tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_view"
    values={[
        { label: 'update_view', value: 'update_view' }
    ]}
>
<TabItem value="update_view">

Modifies some of the details of a view. You can change the filter string and the list of included properties. You can't change the name of the view.

```sql
UPDATE aws.resource_explorer_2.views
SET 
ViewArn = '{{ ViewArn }}',
IncludedProperties = '{{ IncludedProperties }}',
Filters = '{{ Filters }}'
WHERE 
region = '{{ region }}' --required
AND ViewArn = '{{ ViewArn }}' --required
RETURNING
View;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_view"
    values={[
        { label: 'delete_view', value: 'delete_view' }
    ]}
>
<TabItem value="delete_view">

Deletes the specified view. If the specified view is the default view for its Amazon Web Services Region, then all Search operations in that Region must explicitly specify the view to use until you configure a new default by calling the AssociateDefaultView operation.

```sql
DELETE FROM aws.resource_explorer_2.views
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="batch_get_view"
    values={[
        { label: 'batch_get_view', value: 'batch_get_view' }
    ]}
>
<TabItem value="batch_get_view">

Retrieves details about a list of views.

```sql
EXEC aws.resource_explorer_2.views.batch_get_view 
@region='{{ region }}' --required 
@@json=
'{
"ViewArns": "{{ ViewArns }}"
}'
;
```
</TabItem>
</Tabs>
