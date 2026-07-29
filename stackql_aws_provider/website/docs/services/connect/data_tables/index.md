--- 
title: data_tables
hide_title: false
hide_table_of_contents: false
keywords:
  - data_tables
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

Creates, updates, deletes, gets or lists a <code>data_tables</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="data_tables" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.connect.data_tables" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_data_table"
    values={[
        { label: 'describe_data_table', value: 'describe_data_table' },
        { label: 'list_data_tables', value: 'list_data_tables' },
        { label: 'search_data_tables', value: 'search_data_tables' }
    ]}
>
<TabItem value="describe_data_table">

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
    <td>The Amazon Resource Name (ARN) for the data table. Does not include version aliases.</td>
</tr>
<tr>
    <td><CopyableCode code="created_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the data table was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>An optional description of the data table's purpose and contents. (pattern: &lt;code&gt;^&#91;\\P&#123;C&#125;\r\n\t&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the data table. Does not include version aliases.</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_region" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services Region where the data table was last modified, used for region replication. (pattern: &lt;code&gt;&#91;a-z&#93;&#123;2&#125;(-&#91;a-z&#93;+)&#123;1,2&#125;(-&#91;0-9&#93;)?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the data table or any of its properties were last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="lock_version" /></td>
    <td><code>object</code></td>
    <td>The lock version information used for optimistic locking and table versioning. Changes with each update to prevent concurrent modification conflicts.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The human-readable name of the data table. Must be unique within the instance and conform to Connect naming standards. (pattern: &lt;code&gt;^&#91;\p&#123;L&#125;\p&#123;Z&#125;\p&#123;N&#125;\-_.:=@'|&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the data table. One of PUBLISHED or SAVED. (PUBLISHED)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>Key-value pairs for attribute based access control (TBAC or ABAC) and organization.</td>
</tr>
<tr>
    <td><CopyableCode code="time_zone" /></td>
    <td><code>string</code></td>
    <td>The IANA timezone identifier used when resolving time based dynamic values. Required even if no time slices are specified.</td>
</tr>
<tr>
    <td><CopyableCode code="value_lock_level" /></td>
    <td><code>string</code></td>
    <td>The data level that concurrent value edits are locked on. One of DATA_TABLE, PRIMARY_VALUE, ATTRIBUTE, VALUE, and NONE. Determines how concurrent edits are handled when multiple users attempt to modify values simultaneously. (NONE, DATA_TABLE, PRIMARY_VALUE, ATTRIBUTE, VALUE)</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>string</code></td>
    <td>A unique identifier and alias for customer managed versions (not $LATEST or $SAVED).</td>
</tr>
<tr>
    <td><CopyableCode code="version_description" /></td>
    <td><code>string</code></td>
    <td>A description of the customer managed version. (pattern: &lt;code&gt;^&#91;\\P&#123;C&#125;\r\n\t&#93;+$&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_data_tables">

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
    <td>The summary's ARN.</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The summary's ID.</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_region" /></td>
    <td><code>string</code></td>
    <td>The summary's last modified region. (pattern: &lt;code&gt;&#91;a-z&#93;&#123;2&#125;(-&#91;a-z&#93;+)&#123;1,2&#125;(-&#91;0-9&#93;)?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The summary's last modified time.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The summary's name. (pattern: &lt;code&gt;^&#91;\p&#123;L&#125;\p&#123;Z&#125;\p&#123;N&#125;\-_.:=@'|&#93;+$&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="search_data_tables">

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
    <td>The Amazon Resource Name (ARN) for the data table. Does not include version aliases.</td>
</tr>
<tr>
    <td><CopyableCode code="created_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the data table was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>An optional description of the data table's purpose and contents. (pattern: &lt;code&gt;^&#91;\\P&#123;C&#125;\r\n\t&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the data table. Does not include version aliases.</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_region" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services Region where the data table was last modified, used for region replication. (pattern: &lt;code&gt;&#91;a-z&#93;&#123;2&#125;(-&#91;a-z&#93;+)&#123;1,2&#125;(-&#91;0-9&#93;)?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the data table or any of its properties were last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="lock_version" /></td>
    <td><code>object</code></td>
    <td>The lock version information used for optimistic locking and table versioning. Changes with each update to prevent concurrent modification conflicts.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The human-readable name of the data table. Must be unique within the instance and conform to Connect naming standards. (pattern: &lt;code&gt;^&#91;\p&#123;L&#125;\p&#123;Z&#125;\p&#123;N&#125;\-_.:=@'|&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the data table. One of PUBLISHED or SAVED. (PUBLISHED)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>Key-value pairs for attribute based access control (TBAC or ABAC) and organization.</td>
</tr>
<tr>
    <td><CopyableCode code="time_zone" /></td>
    <td><code>string</code></td>
    <td>The IANA timezone identifier used when resolving time based dynamic values. Required even if no time slices are specified.</td>
</tr>
<tr>
    <td><CopyableCode code="value_lock_level" /></td>
    <td><code>string</code></td>
    <td>The data level that concurrent value edits are locked on. One of DATA_TABLE, PRIMARY_VALUE, ATTRIBUTE, VALUE, and NONE. Determines how concurrent edits are handled when multiple users attempt to modify values simultaneously. (NONE, DATA_TABLE, PRIMARY_VALUE, ATTRIBUTE, VALUE)</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>string</code></td>
    <td>A unique identifier and alias for customer managed versions (not $LATEST or $SAVED).</td>
</tr>
<tr>
    <td><CopyableCode code="version_description" /></td>
    <td><code>string</code></td>
    <td>A description of the customer managed version. (pattern: &lt;code&gt;^&#91;\\P&#123;C&#125;\r\n\t&#93;+$&lt;/code&gt;)</td>
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
    <td><a href="#describe_data_table"><CopyableCode code="describe_data_table" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-data_table_id"><code>data_table_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns all properties for a data table except for attributes and values. All properties from CreateDataTable are returned as well as properties for region replication, versioning, and system tables. "Describe" is a deprecated term but is allowed to maintain consistency with existing operations.</td>
</tr>
<tr>
    <td><a href="#list_data_tables"><CopyableCode code="list_data_tables" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Lists all data tables for the specified Amazon Connect instance. Returns summary information for each table including basic metadata and modification details.</td>
</tr>
<tr>
    <td><a href="#search_data_tables"><CopyableCode code="search_data_tables" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Searches for data tables based on the table's ID, name, and description. In the future, this operation can support searching on attribute names and possibly primary values. Follows other search operations closely and supports both search criteria and filters.</td>
</tr>
<tr>
    <td><a href="#create_data_table"><CopyableCode code="create_data_table" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-TimeZone"><code>TimeZone</code></a>, <a href="#parameter-ValueLockLevel"><code>ValueLockLevel</code></a></td>
    <td></td>
    <td>Creates a new data table with the specified properties. Supports the creation of all table properties except for attributes and values. A table with no attributes and values is a valid state for a table. The number of tables per instance is limited to 100 per instance. Customers can request an increase by using Amazon Web Services Service Quotas.</td>
</tr>
<tr>
    <td><a href="#update_data_table_metadata"><CopyableCode code="update_data_table_metadata" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-data_table_id"><code>data_table_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ValueLockLevel"><code>ValueLockLevel</code></a>, <a href="#parameter-TimeZone"><code>TimeZone</code></a></td>
    <td></td>
    <td>Updates the metadata properties of a data table. Accepts all fields similar to CreateDataTable, except for fields and tags. There are no other granular update endpoints. It does not act as a patch operation - all properties must be provided or defaults will be used. Fields follow the same requirements as CreateDataTable.</td>
</tr>
<tr>
    <td><a href="#delete_data_table"><CopyableCode code="delete_data_table" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-data_table_id"><code>data_table_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a data table and all associated attributes, versions, audits, and values. Does not update any references to the data table, even from other data tables. This includes dynamic values and conditional validations. System managed data tables are not deletable by customers. API users may delete the table at any time. When deletion is requested from the admin website, a warning is shown alerting the user of the most recent time the table and its values were accessed.</td>
</tr>
<tr>
    <td><a href="#batch_create_data_table_value"><CopyableCode code="batch_create_data_table_value" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-data_table_id"><code>data_table_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Values"><code>Values</code></a></td>
    <td></td>
    <td>Creates values for attributes in a data table. The value may be a default or it may be associated with a primary value. The value must pass all customer defined validation as well as the default validation for the value type. The operation must conform to Batch Operation API Standards. Although the standard specifies that successful and failed entities are listed separately in the response, authorization fails if any primary values or attributes are unauthorized. The combination of primary values and the attribute name serve as the identifier for the individual item request.</td>
</tr>
<tr>
    <td><a href="#batch_delete_data_table_value"><CopyableCode code="batch_delete_data_table_value" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-data_table_id"><code>data_table_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Values"><code>Values</code></a></td>
    <td></td>
    <td>Deletes multiple values from a data table. API users may delete values at any time. When deletion is requested from the admin website, a warning is shown alerting the user of the most recent time the attribute and its values were accessed. System managed values are not deletable by customers.</td>
</tr>
<tr>
    <td><a href="#batch_describe_data_table_value"><CopyableCode code="batch_describe_data_table_value" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-data_table_id"><code>data_table_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Values"><code>Values</code></a></td>
    <td></td>
    <td>Retrieves multiple values from a data table without evaluating expressions. Returns the raw stored values along with metadata such as lock versions and modification timestamps. "Describe" is a deprecated term but is allowed to maintain consistency with existing operations.</td>
</tr>
<tr>
    <td><a href="#batch_update_data_table_value"><CopyableCode code="batch_update_data_table_value" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-data_table_id"><code>data_table_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Values"><code>Values</code></a></td>
    <td></td>
    <td>Updates multiple data table values using all properties from BatchCreateDataTableValue. System managed values are not modifiable by customers. The operation requires proper lock versions to prevent concurrent modification conflicts.</td>
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
<tr id="parameter-data_table_id">
    <td><CopyableCode code="data_table_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the data table. Must also accept the table ARN with or without a version alias.</td>
</tr>
<tr id="parameter-instance_id">
    <td><CopyableCode code="instance_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the Amazon Connect instance.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of data tables to return in one page of results.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>Specify the pagination token from a previous request to retrieve the next page of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_data_table"
    values={[
        { label: 'describe_data_table', value: 'describe_data_table' },
        { label: 'list_data_tables', value: 'list_data_tables' },
        { label: 'search_data_tables', value: 'search_data_tables' }
    ]}
>
<TabItem value="describe_data_table">

Returns all properties for a data table except for attributes and values. All properties from CreateDataTable are returned as well as properties for region replication, versioning, and system tables. "Describe" is a deprecated term but is allowed to maintain consistency with existing operations.

```sql
SELECT
arn,
created_time,
description,
id,
last_modified_region,
last_modified_time,
lock_version,
name,
status,
tags,
time_zone,
value_lock_level,
version,
version_description
FROM aws.connect.data_tables
WHERE instance_id = '{{ instance_id }}' -- required
AND data_table_id = '{{ data_table_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_data_tables">

Lists all data tables for the specified Amazon Connect instance. Returns summary information for each table including basic metadata and modification details.

```sql
SELECT
arn,
id,
last_modified_region,
last_modified_time,
name
FROM aws.connect.data_tables
WHERE instance_id = '{{ instance_id }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
<TabItem value="search_data_tables">

Searches for data tables based on the table's ID, name, and description. In the future, this operation can support searching on attribute names and possibly primary values. Follows other search operations closely and supports both search criteria and filters.

```sql
SELECT
arn,
created_time,
description,
id,
last_modified_region,
last_modified_time,
lock_version,
name,
status,
tags,
time_zone,
value_lock_level,
version,
version_description
FROM aws.connect.data_tables
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_data_table"
    values={[
        { label: 'create_data_table', value: 'create_data_table' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_data_table">

Creates a new data table with the specified properties. Supports the creation of all table properties except for attributes and values. A table with no attributes and values is a valid state for a table. The number of tables per instance is limited to 100 per instance. Customers can request an increase by using Amazon Web Services Service Quotas.

```sql
INSERT INTO aws.connect.data_tables (
Name,
Description,
TimeZone,
ValueLockLevel,
Status,
Tags,
instance_id,
region
)
SELECT 
'{{ Name }}',
'{{ Description }}',
'{{ TimeZone }}' /* required */,
'{{ ValueLockLevel }}' /* required */,
'{{ Status }}',
'{{ Tags }}',
'{{ instance_id }}',
'{{ region }}'
RETURNING
arn,
id,
lock_version
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: data_tables
  props:
    - name: instance_id
      value: "{{ instance_id }}"
      description: Required parameter for the data_tables resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the data_tables resource.
    - name: Name
      value: "{{ Name }}"
    - name: Description
      value: "{{ Description }}"
    - name: TimeZone
      value: "{{ TimeZone }}"
    - name: ValueLockLevel
      value: "{{ ValueLockLevel }}"
      valid_values: ['NONE', 'DATA_TABLE', 'PRIMARY_VALUE', 'ATTRIBUTE', 'VALUE']
    - name: Status
      value: "{{ Status }}"
      valid_values: ['PUBLISHED']
    - name: Tags
      value: "{{ Tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_data_table_metadata"
    values={[
        { label: 'update_data_table_metadata', value: 'update_data_table_metadata' }
    ]}
>
<TabItem value="update_data_table_metadata">

Updates the metadata properties of a data table. Accepts all fields similar to CreateDataTable, except for fields and tags. There are no other granular update endpoints. It does not act as a patch operation - all properties must be provided or defaults will be used. Fields follow the same requirements as CreateDataTable.

```sql
UPDATE aws.connect.data_tables
SET 
Name = '{{ Name }}',
Description = '{{ Description }}',
ValueLockLevel = '{{ ValueLockLevel }}',
TimeZone = '{{ TimeZone }}'
WHERE 
instance_id = '{{ instance_id }}' --required
AND data_table_id = '{{ data_table_id }}' --required
AND region = '{{ region }}' --required
AND ValueLockLevel = '{{ ValueLockLevel }}' --required
AND TimeZone = '{{ TimeZone }}' --required
RETURNING
lock_version;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_data_table"
    values={[
        { label: 'delete_data_table', value: 'delete_data_table' }
    ]}
>
<TabItem value="delete_data_table">

Deletes a data table and all associated attributes, versions, audits, and values. Does not update any references to the data table, even from other data tables. This includes dynamic values and conditional validations. System managed data tables are not deletable by customers. API users may delete the table at any time. When deletion is requested from the admin website, a warning is shown alerting the user of the most recent time the table and its values were accessed.

```sql
DELETE FROM aws.connect.data_tables
WHERE instance_id = '{{ instance_id }}' --required
AND data_table_id = '{{ data_table_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="batch_create_data_table_value"
    values={[
        { label: 'batch_create_data_table_value', value: 'batch_create_data_table_value' },
        { label: 'batch_delete_data_table_value', value: 'batch_delete_data_table_value' },
        { label: 'batch_describe_data_table_value', value: 'batch_describe_data_table_value' },
        { label: 'batch_update_data_table_value', value: 'batch_update_data_table_value' }
    ]}
>
<TabItem value="batch_create_data_table_value">

Creates values for attributes in a data table. The value may be a default or it may be associated with a primary value. The value must pass all customer defined validation as well as the default validation for the value type. The operation must conform to Batch Operation API Standards. Although the standard specifies that successful and failed entities are listed separately in the response, authorization fails if any primary values or attributes are unauthorized. The combination of primary values and the attribute name serve as the identifier for the individual item request.

```sql
EXEC aws.connect.data_tables.batch_create_data_table_value 
@instance_id='{{ instance_id }}' --required, 
@data_table_id='{{ data_table_id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"Values": "{{ Values }}"
}'
;
```
</TabItem>
<TabItem value="batch_delete_data_table_value">

Deletes multiple values from a data table. API users may delete values at any time. When deletion is requested from the admin website, a warning is shown alerting the user of the most recent time the attribute and its values were accessed. System managed values are not deletable by customers.

```sql
EXEC aws.connect.data_tables.batch_delete_data_table_value 
@instance_id='{{ instance_id }}' --required, 
@data_table_id='{{ data_table_id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"Values": "{{ Values }}"
}'
;
```
</TabItem>
<TabItem value="batch_describe_data_table_value">

Retrieves multiple values from a data table without evaluating expressions. Returns the raw stored values along with metadata such as lock versions and modification timestamps. "Describe" is a deprecated term but is allowed to maintain consistency with existing operations.

```sql
EXEC aws.connect.data_tables.batch_describe_data_table_value 
@instance_id='{{ instance_id }}' --required, 
@data_table_id='{{ data_table_id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"Values": "{{ Values }}"
}'
;
```
</TabItem>
<TabItem value="batch_update_data_table_value">

Updates multiple data table values using all properties from BatchCreateDataTableValue. System managed values are not modifiable by customers. The operation requires proper lock versions to prevent concurrent modification conflicts.

```sql
EXEC aws.connect.data_tables.batch_update_data_table_value 
@instance_id='{{ instance_id }}' --required, 
@data_table_id='{{ data_table_id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"Values": "{{ Values }}"
}'
;
```
</TabItem>
</Tabs>
