--- 
title: themes
hide_title: false
hide_table_of_contents: false
keywords:
  - themes
  - quicksight
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

Creates, updates, deletes, gets or lists a <code>themes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="themes" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.quicksight.themes" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_theme"
    values={[
        { label: 'describe_theme', value: 'describe_theme' },
        { label: 'list_themes', value: 'list_themes' }
    ]}
>
<TabItem value="describe_theme">

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
    <td><CopyableCode code="RequestId" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services request ID for this operation.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>integer</code></td>
    <td>The HTTP status of the request.</td>
</tr>
<tr>
    <td><CopyableCode code="Theme" /></td>
    <td><code>object</code></td>
    <td>The information about the theme that you are describing.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_themes">

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
    <td><CopyableCode code="Arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="CreatedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that this theme was created.</td>
</tr>
<tr>
    <td><CopyableCode code="LastUpdatedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The last date and time that this theme was updated.</td>
</tr>
<tr>
    <td><CopyableCode code="LatestVersionNumber" /></td>
    <td><code>integer (int64)</code></td>
    <td>The latest version number for the theme.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>the display name for the theme.</td>
</tr>
<tr>
    <td><CopyableCode code="ThemeId" /></td>
    <td><code>string</code></td>
    <td>The ID of the theme. This ID is unique per Amazon Web Services Region for each Amazon Web Services account. (pattern: &lt;code&gt;&#91;\w\-&#93;+&lt;/code&gt;)</td>
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
    <td><a href="#describe_theme"><CopyableCode code="describe_theme" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-theme_id"><code>theme_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-version-number"><code>version-number</code></a>, <a href="#parameter-alias-name"><code>alias-name</code></a></td>
    <td>Describes a theme.</td>
</tr>
<tr>
    <td><a href="#list_themes"><CopyableCode code="list_themes" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-next-token"><code>next-token</code></a>, <a href="#parameter-max-results"><code>max-results</code></a>, <a href="#parameter-type"><code>type</code></a></td>
    <td>Lists all the themes in the current Amazon Web Services account.</td>
</tr>
<tr>
    <td><a href="#create_theme"><CopyableCode code="create_theme" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-theme_id"><code>theme_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-BaseThemeId"><code>BaseThemeId</code></a>, <a href="#parameter-Configuration"><code>Configuration</code></a></td>
    <td></td>
    <td>Creates a theme. A theme is set of configuration options for color and layout. Themes apply to analyses and dashboards. For more information, see Using Themes in Amazon Quick Sight in the Amazon Quick Sight User Guide.</td>
</tr>
<tr>
    <td><a href="#update_theme"><CopyableCode code="update_theme" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-theme_id"><code>theme_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-BaseThemeId"><code>BaseThemeId</code></a></td>
    <td></td>
    <td>Updates a theme.</td>
</tr>
<tr>
    <td><a href="#delete_theme"><CopyableCode code="delete_theme" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-theme_id"><code>theme_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-version-number"><code>version-number</code></a></td>
    <td>Deletes a theme.</td>
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
<tr id="parameter-aws_account_id">
    <td><CopyableCode code="aws_account_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon Web Services account that contains the theme that you're deleting.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-theme_id">
    <td><CopyableCode code="theme_id" /></td>
    <td><code>string</code></td>
    <td>An ID for the theme that you want to delete.</td>
</tr>
<tr id="parameter-alias-name">
    <td><CopyableCode code="alias-name" /></td>
    <td><code>string</code></td>
    <td>The alias of the theme that you want to describe. If you name a specific alias, you describe the version that the alias points to. You can specify the latest version of the theme by providing the keyword $LATEST in the AliasName parameter. The keyword $PUBLISHED doesn't apply to themes.</td>
</tr>
<tr id="parameter-max-results">
    <td><CopyableCode code="max-results" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to be returned per request.</td>
</tr>
<tr id="parameter-next-token">
    <td><CopyableCode code="next-token" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of results, or null if there are no more results.</td>
</tr>
<tr id="parameter-type">
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of themes that you want to list. Valid options include the following: ALL (default)- Display all existing themes. CUSTOM - Display only the themes created by people using Amazon Quick Sight. QUICKSIGHT - Display only the starting themes defined by Quick Sight.</td>
</tr>
<tr id="parameter-version-number">
    <td><CopyableCode code="version-number" /></td>
    <td><code>integer (int64)</code></td>
    <td>The version of the theme that you want to delete. Note: If you don't provide a version number, you're using this call to DeleteTheme to delete all versions of the theme.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_theme"
    values={[
        { label: 'describe_theme', value: 'describe_theme' },
        { label: 'list_themes', value: 'list_themes' }
    ]}
>
<TabItem value="describe_theme">

Describes a theme.

```sql
SELECT
RequestId,
Status,
Theme
FROM aws.quicksight.themes
WHERE aws_account_id = '{{ aws_account_id }}' -- required
AND theme_id = '{{ theme_id }}' -- required
AND region = '{{ region }}' -- required
AND `version-number` = '{{ version-number }}'
AND `alias-name` = '{{ alias-name }}'
;
```
</TabItem>
<TabItem value="list_themes">

Lists all the themes in the current Amazon Web Services account.

```sql
SELECT
Arn,
CreatedTime,
LastUpdatedTime,
LatestVersionNumber,
Name,
ThemeId
FROM aws.quicksight.themes
WHERE aws_account_id = '{{ aws_account_id }}' -- required
AND region = '{{ region }}' -- required
AND `next-token` = '{{ next-token }}'
AND `max-results` = '{{ max-results }}'
AND type = '{{ type }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_theme"
    values={[
        { label: 'create_theme', value: 'create_theme' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_theme">

Creates a theme. A theme is set of configuration options for color and layout. Themes apply to analyses and dashboards. For more information, see Using Themes in Amazon Quick Sight in the Amazon Quick Sight User Guide.

```sql
INSERT INTO aws.quicksight.themes (
Name,
BaseThemeId,
VersionDescription,
Configuration,
Permissions,
Tags,
aws_account_id,
theme_id,
region
)
SELECT 
'{{ Name }}',
'{{ BaseThemeId }}' /* required */,
'{{ VersionDescription }}',
'{{ Configuration }}' /* required */,
'{{ Permissions }}',
'{{ Tags }}',
'{{ aws_account_id }}',
'{{ theme_id }}',
'{{ region }}'
RETURNING
Arn,
CreationStatus,
RequestId,
Status,
ThemeId,
VersionArn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: themes
  props:
    - name: aws_account_id
      value: "{{ aws_account_id }}"
      description: Required parameter for the themes resource.
    - name: theme_id
      value: "{{ theme_id }}"
      description: Required parameter for the themes resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the themes resource.
    - name: Name
      value: "{{ Name }}"
    - name: BaseThemeId
      value: "{{ BaseThemeId }}"
    - name: VersionDescription
      value: "{{ VersionDescription }}"
    - name: Configuration
      description: |
        The theme configuration. This configuration contains all of the display properties for a theme.
      value:
        DataColorPalette:
          Colors:
            - "{{ Colors }}"
          MinMaxGradient:
            - "{{ MinMaxGradient }}"
          EmptyFillColor: "{{ EmptyFillColor }}"
        UIColorPalette:
          PrimaryForeground: "{{ PrimaryForeground }}"
          PrimaryBackground: "{{ PrimaryBackground }}"
          SecondaryForeground: "{{ SecondaryForeground }}"
          SecondaryBackground: "{{ SecondaryBackground }}"
          Accent: "{{ Accent }}"
          AccentForeground: "{{ AccentForeground }}"
          Danger: "{{ Danger }}"
          DangerForeground: "{{ DangerForeground }}"
          Warning: "{{ Warning }}"
          WarningForeground: "{{ WarningForeground }}"
          Success: "{{ Success }}"
          SuccessForeground: "{{ SuccessForeground }}"
          Dimension: "{{ Dimension }}"
          DimensionForeground: "{{ DimensionForeground }}"
          Measure: "{{ Measure }}"
          MeasureForeground: "{{ MeasureForeground }}"
        Sheet:
          Tile:
            BackgroundColor: "{{ BackgroundColor }}"
            Border:
              Color: "{{ Color }}"
              Show: {{ Show }}
              Width: "{{ Width }}"
            BorderRadius: "{{ BorderRadius }}"
            Padding: "{{ Padding }}"
          TileLayout:
            Gutter:
              Show: {{ Show }}
            Margin:
              Show: {{ Show }}
          Background:
            Color: "{{ Color }}"
            Gradient: "{{ Gradient }}"
        Typography:
          FontFamilies:
            - FontFamily: "{{ FontFamily }}"
          AxisTitleFontConfiguration:
            FontSize:
              Relative: "{{ Relative }}"
              Absolute: "{{ Absolute }}"
            FontDecoration: "{{ FontDecoration }}"
            FontColor: "{{ FontColor }}"
            FontWeight:
              Name: "{{ Name }}"
            FontStyle: "{{ FontStyle }}"
            FontFamily: "{{ FontFamily }}"
          AxisLabelFontConfiguration:
            FontSize:
              Relative: "{{ Relative }}"
              Absolute: "{{ Absolute }}"
            FontDecoration: "{{ FontDecoration }}"
            FontColor: "{{ FontColor }}"
            FontWeight:
              Name: "{{ Name }}"
            FontStyle: "{{ FontStyle }}"
            FontFamily: "{{ FontFamily }}"
          LegendTitleFontConfiguration:
            FontSize:
              Relative: "{{ Relative }}"
              Absolute: "{{ Absolute }}"
            FontDecoration: "{{ FontDecoration }}"
            FontColor: "{{ FontColor }}"
            FontWeight:
              Name: "{{ Name }}"
            FontStyle: "{{ FontStyle }}"
            FontFamily: "{{ FontFamily }}"
          LegendValueFontConfiguration:
            FontSize:
              Relative: "{{ Relative }}"
              Absolute: "{{ Absolute }}"
            FontDecoration: "{{ FontDecoration }}"
            FontColor: "{{ FontColor }}"
            FontWeight:
              Name: "{{ Name }}"
            FontStyle: "{{ FontStyle }}"
            FontFamily: "{{ FontFamily }}"
          DataLabelFontConfiguration:
            FontSize:
              Relative: "{{ Relative }}"
              Absolute: "{{ Absolute }}"
            FontDecoration: "{{ FontDecoration }}"
            FontColor: "{{ FontColor }}"
            FontWeight:
              Name: "{{ Name }}"
            FontStyle: "{{ FontStyle }}"
            FontFamily: "{{ FontFamily }}"
          VisualTitleFontConfiguration:
            FontConfiguration:
              FontSize:
                Relative: "{{ Relative }}"
                Absolute: "{{ Absolute }}"
              FontDecoration: "{{ FontDecoration }}"
              FontColor: "{{ FontColor }}"
              FontWeight:
                Name: "{{ Name }}"
              FontStyle: "{{ FontStyle }}"
              FontFamily: "{{ FontFamily }}"
            TextAlignment: "{{ TextAlignment }}"
            TextTransform: "{{ TextTransform }}"
          VisualSubtitleFontConfiguration:
            FontConfiguration:
              FontSize:
                Relative: "{{ Relative }}"
                Absolute: "{{ Absolute }}"
              FontDecoration: "{{ FontDecoration }}"
              FontColor: "{{ FontColor }}"
              FontWeight:
                Name: "{{ Name }}"
              FontStyle: "{{ FontStyle }}"
              FontFamily: "{{ FontFamily }}"
            TextAlignment: "{{ TextAlignment }}"
            TextTransform: "{{ TextTransform }}"
          ControlTitleFontConfiguration:
            FontConfiguration:
              FontSize:
                Relative: "{{ Relative }}"
                Absolute: "{{ Absolute }}"
              FontDecoration: "{{ FontDecoration }}"
              FontColor: "{{ FontColor }}"
              FontWeight:
                Name: "{{ Name }}"
              FontStyle: "{{ FontStyle }}"
              FontFamily: "{{ FontFamily }}"
            TextAlignment: "{{ TextAlignment }}"
    - name: Permissions
      value:
        - Principal: "{{ Principal }}"
          Actions: "{{ Actions }}"
    - name: Tags
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_theme"
    values={[
        { label: 'update_theme', value: 'update_theme' }
    ]}
>
<TabItem value="update_theme">

Updates a theme.

```sql
UPDATE aws.quicksight.themes
SET 
Name = '{{ Name }}',
BaseThemeId = '{{ BaseThemeId }}',
VersionDescription = '{{ VersionDescription }}',
Configuration = '{{ Configuration }}'
WHERE 
aws_account_id = '{{ aws_account_id }}' --required
AND theme_id = '{{ theme_id }}' --required
AND region = '{{ region }}' --required
AND BaseThemeId = '{{ BaseThemeId }}' --required
RETURNING
Arn,
CreationStatus,
RequestId,
Status,
ThemeId,
VersionArn;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_theme"
    values={[
        { label: 'delete_theme', value: 'delete_theme' }
    ]}
>
<TabItem value="delete_theme">

Deletes a theme.

```sql
DELETE FROM aws.quicksight.themes
WHERE aws_account_id = '{{ aws_account_id }}' --required
AND theme_id = '{{ theme_id }}' --required
AND region = '{{ region }}' --required
AND `version-number` = '{{ version-number }}'
;
```
</TabItem>
</Tabs>
