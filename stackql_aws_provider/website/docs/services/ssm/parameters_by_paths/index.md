--- 
title: parameters_by_paths
hide_title: false
hide_table_of_contents: false
keywords:
  - parameters_by_paths
  - ssm
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

Creates, updates, deletes, gets or lists a <code>parameters_by_paths</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="parameters_by_paths" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ssm.parameters_by_paths" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_parameters_by_path"
    values={[
        { label: 'get_parameters_by_path', value: 'get_parameters_by_path' }
    ]}
>
<TabItem value="get_parameters_by_path">

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
    <td><CopyableCode code="ARN" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the parameter.</td>
</tr>
<tr>
    <td><CopyableCode code="DataType" /></td>
    <td><code>string</code></td>
    <td>The data type of the parameter, such as text or aws:ec2:image. The default is text.</td>
</tr>
<tr>
    <td><CopyableCode code="LastModifiedDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date the parameter was last changed or updated and the parameter version was created.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of the parameter.</td>
</tr>
<tr>
    <td><CopyableCode code="Selector" /></td>
    <td><code>string</code></td>
    <td>Either the version number or the label used to retrieve the parameter value. Specify selectors by using one of the following formats: parameter_name:version parameter_name:label</td>
</tr>
<tr>
    <td><CopyableCode code="SourceResult" /></td>
    <td><code>string</code></td>
    <td>Applies to parameters that reference information in other Amazon Web Services services. SourceResult is the raw result or response from the source.</td>
</tr>
<tr>
    <td><CopyableCode code="Type" /></td>
    <td><code>string</code></td>
    <td>The type of parameter. Valid values include the following: String, StringList, and SecureString. If type is StringList, the system returns a comma-separated string with no spaces between commas in the Value field. (String, StringList, SecureString)</td>
</tr>
<tr>
    <td><CopyableCode code="Value" /></td>
    <td><code>string</code></td>
    <td>The parameter value. If type is StringList, the system returns a comma-separated string with no spaces between commas in the Value field.</td>
</tr>
<tr>
    <td><CopyableCode code="Version" /></td>
    <td><code>integer (int64)</code></td>
    <td>The parameter version.</td>
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
    <td><a href="#get_parameters_by_path"><CopyableCode code="get_parameters_by_path" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieve information about one or more parameters under a specified level in a hierarchy. Request results are returned on a best-effort basis. If you specify MaxResults in the request, the response includes information up to the limit specified. The number of items returned, however, can be between zero and the value of MaxResults. If the service reaches an internal limit while processing the results, it stops the operation and returns the matching values up to that point and a NextToken. You can specify the NextToken in a subsequent call to get the next set of results. Parameter names can't contain spaces. The service removes any spaces specified for the beginning or end of a parameter name. If the specified name for a parameter contains spaces between characters, the request fails with a ValidationException error.</td>
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
    defaultValue="get_parameters_by_path"
    values={[
        { label: 'get_parameters_by_path', value: 'get_parameters_by_path' }
    ]}
>
<TabItem value="get_parameters_by_path">

Retrieve information about one or more parameters under a specified level in a hierarchy. Request results are returned on a best-effort basis. If you specify MaxResults in the request, the response includes information up to the limit specified. The number of items returned, however, can be between zero and the value of MaxResults. If the service reaches an internal limit while processing the results, it stops the operation and returns the matching values up to that point and a NextToken. You can specify the NextToken in a subsequent call to get the next set of results. Parameter names can't contain spaces. The service removes any spaces specified for the beginning or end of a parameter name. If the specified name for a parameter contains spaces between characters, the request fails with a ValidationException error.

```sql
SELECT
ARN,
DataType,
LastModifiedDate,
Name,
Selector,
SourceResult,
Type,
Value,
Version
FROM aws.ssm.parameters_by_paths
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
